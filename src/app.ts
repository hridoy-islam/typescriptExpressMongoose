/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import router from './app/routes'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/', router)

const test = (req: Request, res: Response) => {
  return res.json({
    message: 'Welcome to the Test API',
  })
}

app.get('/', test)

const errorHandler = function (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(500).json({
    success: false,
    message: err.message || 'User not found',
    error: {
      code: 404,
      description: err.message || 'User not found',
    },
  })
}

app.use(errorHandler)

export default app
