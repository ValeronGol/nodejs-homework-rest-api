const Joi = require('joi')

const contactsValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string().required(),
})

module.exports = contactsValidation
