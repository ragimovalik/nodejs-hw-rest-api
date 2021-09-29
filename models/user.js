const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { v4 } = require("uuid");

// const emailRegexp =

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
      minlengh: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      // match: emailRegexp,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: "",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

// Password hash example
userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// Method for login controller
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// Method for creating verification token
userSchema.methods.createVerifyToken = function () {
  this.verifyToken = v4();
};

const joiSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: {
        allow: ["com", "net", "org", "ua", "us"],
      },
    })
    .required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
  token: Joi.string(),
  avatarURL: Joi.string(),
  verify: Joi.bool(),
  verifyToken: Joi.string(),
});

const emailValidation = Joi.object({
  email: Joi.string().email().required(),
});

const User = model("user", userSchema);

module.exports = { User, joiSchema, emailValidation };
