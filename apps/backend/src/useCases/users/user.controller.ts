import { Request, Response } from 'express'
import { UserService } from './user.service'

export class UserController {
  private userService: UserService

  constructor(private service: UserService) {
    this.userService = service
  }

  async list(req: Request, res: Response) {
    const users = await this.userService.list()

    return res.status(200).send({ success: true, users }).end()
  }
}
