const joi = require('joi')
const j2s = require('joi-to-swagger')


// Joi

export const joiSchemaLogin = joi.object().keys({
  email: joi.string().example('@mail.ru'),
  password: joi.string().example('123456'),
})

// end of Joi


const schemaLogin = j2s(joiSchemaLogin).swagger;

export {
  schemaLogin,
}
