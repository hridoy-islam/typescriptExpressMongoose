export type TUserAddress = {
  street: string
  city: string
  country: string
}
export type TUserName = {
  firstname: string
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

export default TUser
