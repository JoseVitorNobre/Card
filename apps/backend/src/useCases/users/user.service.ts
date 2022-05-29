import { prisma } from '../../prisma'

type User = typeof prisma['user']

export class UserService {
  private userService: User

  constructor() {
    this.userService = prisma.user
  }

  async list() {
    const users = await this.userService.findMany({})
    return users
  }
}
