const Joi = require("joi");

const contactUpdatingSchema = Joi.object({
  name: Joi.string().min(2).max(20),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ["com", "net", "org", "ua", "us"],
    },
  }),
  phone: Joi.alternatives().try(
    Joi.number().min(7).max(15),
    Joi.string().min(7).max(15)
  ),
});

module.exports = contactUpdatingSchema;
