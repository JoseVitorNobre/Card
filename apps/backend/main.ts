import 'dotenv/config'
import { App } from './src/app'

const app = new App(Number(process.env.PORT))

export default app
