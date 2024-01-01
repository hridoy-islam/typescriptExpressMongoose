import Joi from 'joi'

const UserNameValidation = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
})

const UserNameAddress = Joi.object({
  street: Joi.string(),
  city: Joi.string(),
  country: Joi.string(),
})

const UserValidationSchema = Joi.object({
  userid: Joi.number(),
  username: Joi.string(),
  password: Joi.string(),
  fullName: UserNameValidation,
  age: Joi.number(),
  email: Joi.string(),
  isActive: Joi.boolean(),
  hobbies: Joi.array().items(Joi.string()),
  address: UserNameAddress,
})

export default UserValidationSchema
