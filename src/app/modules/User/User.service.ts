import config from '../../config'
import TUser from './User.interface'
import { User } from './User.model'
import bcrypt from 'bcrypt'

const createUserIntoDB = async (payload: TUser) => {
  const user = await User.create(payload)
  return user
}

const getAllUsersFromDB = async () => {
  const user = await User.find()
  return user
}

const getSingleUserFromDB = async (userId: string) => {
  const user = await User.findById(userId)
  return user
}

const updateUserIntoDB = async (userId: string, payload: TUser) => {
  const existUser = await User.isUserExists(userId)
  if (!existUser) throw new Error('No User Exits')

  if (payload.password) {
    payload.password = await bcrypt.hash(
      payload.password,
      Number(config.bcrypt_salt_rounds),
    )
  }

  const updatedUser = await User.findOneAndUpdate({ _id: userId }, payload, {
    upsert: true,
  })

  return updatedUser
}

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
}
