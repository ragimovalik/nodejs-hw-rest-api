const nodemailer = require("nodemailer");
// require("dotenv").config();
const { InternalServerError } = require("http-errors");

const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465, // 25 || 465 || 2255
  secure: true,
  auth: {
    user: "r-alik@ukr.net",
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendMail = async (data) => {
  try {
    const email = { ...data, from: "r-alik@ukr.net" };
    await transporter.sendMail(email);
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};

module.exports = sendMail;
