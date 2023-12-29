import { Schema, model } from 'mongoose'
import TUser, { TUserAddress, TUserName } from './User.interface'

const userNameSchema = new Schema<TUserName>({
  firstname: { type: String, required: [true, 'First Name is Required'] },
  lastName: { type: String, required: [true, 'Last Name is Required'] },
})

const userAddressSchema = new Schema<TUserAddress>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
})
const userSchema = new Schema<TUser>({
  userId: { type: Number, required: [true, 'User id required'] },
  username: { type: String, required: [true, 'Username is required'] },
  password: { type: String, required: [true, 'Username is required'] },
  fullName: { type: userNameSchema },
  age: { type: Number },
  email: { type: String },
  isActive: { type: Boolean },
  hobbies: [{ type: String }],
  address: { type: userAddressSchema },
})

export const User = model('User', userSchema)
