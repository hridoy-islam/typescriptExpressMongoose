import { z } from 'zod'

const userAddressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
})

const userNameValidationSchema = z.object({
  firstname: z.string().min(1),
  lastName: z.string().min(1).max(20),
})

const UserValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: userNameValidationSchema,
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: userAddressValidationSchema,
})

export default UserValidationSchema
