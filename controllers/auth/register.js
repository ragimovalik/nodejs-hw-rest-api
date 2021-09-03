// const bcrypt = require("bcryptjs");
const { User } = require("../../models/");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Already register",
      });
    }

    // Hash a password and add (create) new user.
    const newUser = new User({ email });
    newUser.setPassword(password);
    await newUser.save();

    /* // Other way to do same thing
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const result = await User.create({ email, password: hashPassword });
    */

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: newUser,
      },
      message: "Success register",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
