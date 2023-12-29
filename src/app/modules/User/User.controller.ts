import { Request, Response } from 'express'
import { UserServices } from './User.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

const createUser = async (req: Request, res: Response) => {
  const result = await UserServices.createUserIntoDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created Successfully',
    data: result,
  })
}

export const UserControllers = {
  createUser,
}
