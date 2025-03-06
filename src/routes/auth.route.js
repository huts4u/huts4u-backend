const router = require("express").Router();
const { prepareBody } = require("../utils/response");
const { asyncHandler } = require("../middleware/asyncHandler");
const {
  sendOTP,
  verifyOTP,
  register,
  getProfile,
} = require("../controller/auth.controller");
const {
  signupValidation,
  signinValidation,
  update,
  resetPassword: reset,
  forgotPassword: forgot,
} = require("../validators/auth.validator");
const checkMail = require("../middleware/checkMail");
const { verifySign } = require("../utils/token");
const upload = require("../middleware/multer");

// send OTP toPhone Number
router.route("/send-otp").post(prepareBody, asyncHandler("", sendOTP));

router.route("/verify-otp").post(prepareBody, asyncHandler("", verifyOTP));

router.route("/create").post(
  prepareBody,
  // asyncHandler("user", checkMail),
  asyncHandler("user", register)
);

//GET the PROFILE
router
  .route("/profile/:id")
  .get(asyncHandler("user", asyncHandler("user", getProfile)));

module.exports = router;
