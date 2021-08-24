const Joi = require("joi");

const contactAddingSchema = Joi.object({
  name: Joi.string().alphanum().min(2).max(15).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: {
        allow: ["com", "net", "org", "ua"],
      },
    })
    .required(),
  phone: Joi.alternatives()
    .try(Joi.number().min(7).max(15), Joi.string().min(7).max(15))
    .required(),
});

module.exports = contactAddingSchema;
