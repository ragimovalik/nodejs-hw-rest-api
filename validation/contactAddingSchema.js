const Joi = require("joi");

const contactAddingSchema = Joi.object({
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
});

module.exports = contactAddingSchema;
