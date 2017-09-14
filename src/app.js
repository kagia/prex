import path from 'path'
import express from 'express'
import promiseMiddleware from 'express-promise'

const app = express()

app.use(promiseMiddleware())
app.use(express.static(path.join(__dirname, '../public')))

export default app
