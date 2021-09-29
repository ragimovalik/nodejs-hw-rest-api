const { NotFound } = require("http-errors");

const { User } = require("../../models");

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verifyToken: verificationToken });

  if (!user) {
    throw new NotFound("User not found");
  }

  await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true });

  res.send("<h2>Congratulations! Your email has been confirmed</h2>");
};

module.exports = verify;
