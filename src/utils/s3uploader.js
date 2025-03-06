const { S3Client } = require("@aws-sdk/client-s3");

const config = {
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACESS_KEY,
    secretAccessKey: process.env.SECRET_ACESS_KEY,
  },
};

const s3 = new S3Client(config);

module.exports = s3;
