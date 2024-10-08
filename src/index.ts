/** @format */
let port = 20
console.log('hello world typescript')
import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieparser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import { HttpStatusCode } from 'axios'
// import router from './router/router'
const app = express()
// app.use('/api/v1/', router())
console.log(HttpStatusCode)
app.use(
  cors({
    credentials: true,
  }),
  compression(),
  cookieparser(),
  bodyParser.json()
)
// create a our serve application
const server = http.createServer(app)

mongoose.connection.on('error', (error: Error) => {
  console.log(error)
})

server.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
)
const MONGO_URL =
  'mongodb+srv://derricknsirim77:@Derrick123@cluster0.evkcugs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
