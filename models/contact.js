const { Schema, model, SchemaTypes } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: {
        allow: ["com", "net", "org", "ua", "us"],
      },
    })
    .required(),
  phone: Joi.alternatives()
    .try(Joi.number().min(7).max(15), Joi.string().min(7).max(15))
    .required(),
  favorite: Joi.boolean(),
});

const Contact = model("contact", contactSchema);

module.exports = { Contact, joiSchema };
