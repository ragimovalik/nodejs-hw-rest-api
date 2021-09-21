const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

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
});

const User = model("user", userSchema);

module.exports = { User, joiSchema };
