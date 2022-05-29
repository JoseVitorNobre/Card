import { Router } from 'express'
import { UserController } from './user.controller'
import { UserService } from './user.service'

export const userRoutes = Router()

const controller = new UserController(new UserService())

userRoutes.get('/', controller.list)
