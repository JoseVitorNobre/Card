import express, { Express } from 'express'
import cors from 'cors'
import { routes } from './routes'

export class App {
  public server!: Express

  constructor(port = 3333) {
    this.server = express()
    this.server.use(cors())
    this.server.use(routes)

    this.server.listen(port, () => console.log(`Server listening in port ${port}`))
  }
}
