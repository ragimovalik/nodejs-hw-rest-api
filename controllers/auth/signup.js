// const bcrypt = require("bcryptjs");
const { User } = require("../../models");
const { Conflict } = require("http-errors");

const signup = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Already register");
  }
  // Hash a password and add (create) new user.
  const newUser = new User({ email });
  newUser.setPassword(password);
  await newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newUser,
    },
    message: "Success signup",
  });
};

module.exports = signup;
