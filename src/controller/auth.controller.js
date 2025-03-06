const User = require("../service/user.service");
const { prepareResponse } = require("../utils/response");
const { getRawData } = require("../utils/function");
const httpRes = require("../utils/http");
const queryService = require("../service/query.service");
const {
  SERVER_ERROR_MESSAGE,
  VERIFY_EMAIL_BEFORE_LOGIN,
  INVALID_OTP,
  PROFILE_CREATION,
  CURRENT_PASSWORD_INCORRECT,
  LOGIN,
  ACCOUNT_NOT_FOUND,
  USER_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPLOADED,
  RESET_PASS_SUCCESS,
  ADD,
} = require("../utils/messages");
const { hashPassword, comparePassword } = require("../utils/Password");
const logger = require("../utils/logger");
const sendEmail = require("../utils/mail");
const { generateSign } = require("../utils/token");
require("dotenv").config();
const axios = require("axios");
const TWO_FACTOR_API_KEY = process.env.TWO_FACTOR_API_KEY;

exports.sendOTP = async (req, res) => {
  const { phone } = req.body;

  try {
    const response = await axios.get(
      `https://2factor.in/API/V1/${TWO_FACTOR_API_KEY}/SMS/${phone}/AUTOGEN3/OTP1`
    );

    if (response.data.Status === "Success") {
      res
        .status(httpRes.OK)
        .json(
          prepareResponse(
            "OK",
            "OTP  Send Successfully",
            response.data.Details,
            null
          )
        );
    } else {
      res
        .status(httpRes.BAD_REQUEST)
        .json(prepareResponse("BAD_REQUEST", "Failed to send OTP", null, null));
    }
  } catch (error) {
    res
      .status(httpRes.SERVER_ERROR)
      .json(prepareResponse("SERVER_ERROR", SERVER_ERROR_MESSAGE, null, error));
  }
};
exports.verifyOTP = async (req, res) => {
  const { otp, sessionId, phone } = req.body;

  if (!sessionId) {
    return res
      .status(httpRes.BAD_REQUEST)
      .json(
        prepareResponse("BAD_REQUEST", "SessionId is required", null, null)
      );
  }

  try {
    const verifyResponse = await axios.get(
      `https://2factor.in/API/V1/${TWO_FACTOR_API_KEY}/SMS/VERIFY/${sessionId}/${otp}`
    );

    if (verifyResponse.data.Status === "Success") {
      // 🔎 Check if user exists in the database
      let user = await User.getOneUserByCond({ phoneNumber: phone });

      if (user) {
        // ✅ Existing user → Generate JWT token
        // const authToken = jwt.sign({ phone: user.phoneNumber, id: user.id }, process.env.JWT_SECRET, {
        //   expiresIn: "7d", // 7 days session
        // });
        const authToken = generateSign({
          phone: user.phoneNumber,
          id: user.id,
        });

        return res
          .status(httpRes.OK)
          .json(
            prepareResponse(
              "OK",
              "OTP Verified, Logged In",
              { user, token: authToken },
              null
            )
          );
      } else {
        // 🆕 New user → Ask for details or auto-create account
        return res
          .status(httpRes.OK)
          .json(
            prepareResponse(
              "OK",
              "OTP Verified, New User",
              { user: null, phone },
              null
            )
          );
      }
    } else {
      return res
        .status(httpRes.BAD_REQUEST)
        .json(
          prepareResponse(
            "BAD_REQUEST",
            "Invalid OTP or Expired Session",
            null,
            null
          )
        );
    }

    // if (verifyResponse.data.Status === "Success") {
    //   res
    //     .status(httpRes.OK)
    //     .json(prepareResponse("OK", "OTP Verified", null, null));
    // } else {
    //   res
    //     .status(httpRes.BAD_REQUEST)
    //     .json(
    //       prepareResponse(
    //         "BAD_REQUEST",
    //         "Invalid OTP or Expired Session",
    //         null,
    //         null
    //       )
    //     );
    // }
  } catch (error) {
    res
      .status(httpRes.SERVER_ERROR)
      .json(prepareResponse("SERVER_ERROR", SERVER_ERROR_MESSAGE, null, error));
  }
};

// Register New User & Generate Auth Token
exports.register = async (req, res) => {
  try {
    const { password, email } = req.body;
    const email1 = email || null;
    const hashedpassword = await hashPassword(password || "123456");
    req.body.password = hashedpassword;
    req.body.email = email1;
    let result = await User.addData(req.body);
    res
      .status(httpRes.CREATED)
      .json(prepareResponse("CREATED", ADD, result, null));
  } catch (error) {
    res
      .status(httpRes.SERVER_ERROR)
      .json(prepareResponse("SERVER_ERROR", SERVER_ERROR_MESSAGE, null, error));
  }
};

exports.getProfile = async (req, res) => {
  try {
    let user = await User.getOneUserByCond({
      phoneNumber: req.params.phoneNumber,
    });

    if (user) {
      res
        .status(httpRes.OK)
        .json(prepareResponse("OK", USER_PROFILE, user, null));
    } else {
      res
        .status(httpRes.NOT_FOUND)
        .json(prepareResponse("NOT_FOUND", ACCOUNT_NOT_FOUND, null, null));
    }
  } catch (error) {
    logger.error(error);
    return res
      .status(httpRes.SERVER_ERROR)
      .json(prepareResponse("SERVER_ERROR", SERVER_ERROR_MESSAGE, null, error));
  }
};

//documents uploder
exports.fileUploader = (req, res) => {
  if (Array.isArray(req.files)) {
    let files = req.files;
    let data = {};
    files.forEach((file, index) => {
      data[`doc${index}`] = file.location;
    });
    res.status(httpRes.OK).json(prepareResponse("OK", UPLOADED, data, null));
  } else {
    res
      .status(httpRes.SERVER_ERROR)
      .json(prepareResponse("SERVER_ERROR", SERVER_ERROR_MESSAGE, null, null));
  }
};
