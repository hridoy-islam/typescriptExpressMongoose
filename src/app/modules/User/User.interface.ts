import { Model } from 'mongoose'

export type TUserAddress = {
  street: string
  city: string
  country: string
}
export type TUserName = {
  firstName: string
  lastName: string
}

export type TUserOrder = [
  {
    productName: string
    price: number
    quantity: number
  },
]

type TUser = {
  userId: number
  username: string
  password: string
  fullName: TUserName
  age: number
  email: string
  isActive: boolean
  hobbies: string[]
  address: TUserAddress
}

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<TUser | null>
}

export default TUser
