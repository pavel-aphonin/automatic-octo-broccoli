const joi = require('joi')
const j2s = require('joi-to-swagger')


// Joi

export const joiSchemaProjectTests = joi.object().keys({
  id: joi.number().required().example(1),
})

// end of Joi


const schemaProjectTests = j2s(joiSchemaProjectTests).swagger;

export {
  schemaProjectTests,
}
