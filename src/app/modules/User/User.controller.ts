import { NextFunction, Request, Response } from 'express'
import { UserServices } from './User.service'
import UserValidationSchema from './User.validation'

const createUser = async (req: Request, res: Response) => {
  const { error, value } = UserValidationSchema.validate(req.body)
  if (error) {
    return res.status(500).json({
      success: false,
      message: 'VALIDATION_ERROR',
      error: {
        code: 404,
        description: 'VALIDATION_ERROR',
      },
    })
  }
  const result = await UserServices.createUserIntoDB(value)
  return res.status(200).json({
    success: true,
    message: 'User Created Successfully',
    data: result,
  })
}

const getAllUsers = async (req: Request, res: Response) => {
  const result = await UserServices.getAllUsersFromDB()
  return res.status(200).json({
    success: true,
    message: 'User Retrived Successfully',
    data: result,
  })
}

const getSingleUser = async (req: Request, res: Response) => {
  const { userId } = req.params
  const result = await UserServices.getSingleUserFromDB(userId)
  return res.status(200).json({
    success: true,
    message: 'User Retrived Successfully',
    data: result,
  })
}

const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params
  const payload = req.body
  const result = await UserServices.updateUserIntoDB(userId, payload)
  return res.status(200).json({
    success: true,
    message: 'User updated Successfully',
    data: result,
  })
}

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
}
