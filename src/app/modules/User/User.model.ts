import { Schema, model } from 'mongoose'
import TUser, { TUserAddress, TUserName, UserModel } from './User.interface'
import config from '../../config'
import bcrypt from 'bcrypt'

const userNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: [true, 'First Name is Required'] },
  lastName: { type: String, required: [true, 'Last Name is Required'] },
})

const userAddressSchema = new Schema<TUserAddress>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
})
const userSchema = new Schema<TUser, UserModel>({
  userId: { type: Number, required: [true, 'User id required'], unique: true },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  password: { type: String, required: [true, 'Username is required'] },
  fullName: { type: userNameSchema },
  age: { type: Number },
  email: { type: String },
  isActive: { type: Boolean },
  hobbies: [{ type: String }],
  address: { type: userAddressSchema },
})

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  )
  next()
})

userSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

userSchema.static('isUserExists', async function isUserExists(id: string) {
  const existUser = await User.findById(id)
  return existUser
})

userSchema.post('findOneAndUpdate', function (doc, next) {
  doc.password = ''
  next()
})

export const User = model<TUser, UserModel>('User', userSchema)
