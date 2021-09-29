const { User } = require("../../models");
const { BadRequest, NotFound } = require("http-errors");
const sendMail = require("../../utils");

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const { verify, verifyToken } = user;

  if (!user) {
    throw new NotFound("Please signup");
  }

  if (verify) {
    throw new BadRequest("Verification has already been passed");
  }

  if (!verify) {
    const data = {
      to: email,
      subject: "Signup Confirmation",
      html: `<a href="http://localhost:4000/api/v1/users/verify/${verifyToken}">Press to confirm your email</a>`,
    };

    await sendMail(data);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result: email,
    },
    message: "Verification email sent",
  });
};

module.exports = resendVerify;
