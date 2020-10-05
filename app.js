require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const todoRouter = require('./routes/todos.js')
const userRouter = require('./routes/users.js')
const errorHandler = require('./middlewares/errorhandler.js')
const randomRouter = require('./routes/randoms.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', userRouter)
app.use('/todos', todoRouter)
app.use('/randomtodo', randomRouter)
app.use(errorHandler)


app.listen(port, () => {
  console.log(`listen on port ${port}`)
})