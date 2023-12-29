import { Router } from 'express'
import { UserControllers } from './User.controller'
import validateRequest from '../../middlewares/validateRquest'
import UserValidationSchema from './User.validation'

const router = Router()

router.post(
  '/',
  validateRequest(UserValidationSchema),
  UserControllers.createUser,
)

export const UserRoutes = router
