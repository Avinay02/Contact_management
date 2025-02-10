const Joi = require('joi')

const validateContact = contact => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    phone: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .required(),
    address: Joi.string().max(100).optional(),
  })

  return schema.validate(contact)
}

module.exports = {validateContact}
