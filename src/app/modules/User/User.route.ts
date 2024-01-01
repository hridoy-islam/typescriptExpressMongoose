import { Router } from 'express'
import { UserControllers } from './User.controller'

const router = Router()

router.post('/', UserControllers.createUser)

router.get('/', UserControllers.getAllUsers)
router.get('/:userId', UserControllers.getSingleUser)
router.put('/:userId', UserControllers.updateUser)

export const UserRoutes = router
