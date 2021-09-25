// const bcrypt = require("bcryptjs");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../../public/avatars");

const signup = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Already register");
  }

  const defaultAvatar = gravatar.url(email, { s: "250", protocol: "https" });

  // Hash a password and add (create) new user.
  const newUser = new User({ email, avatarURL: defaultAvatar });
  newUser.setPassword(password);

  const id = String(newUser._id);

  const userAvatarDir = path.join(avatarsDir, id);
  await fs.mkdir(userAvatarDir);

  await newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newUser.avatarURL,
    },
    message: "Success signup",
  });
};

module.exports = signup;
