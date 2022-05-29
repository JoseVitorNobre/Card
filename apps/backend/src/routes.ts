import { Router } from 'express'
import { userRoutes } from './useCases/users/user.route'

export const routes = Router()

routes.use('/users', userRoutes)
