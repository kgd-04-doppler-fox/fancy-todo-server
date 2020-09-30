require('dotenv').config()
const express = require('express')
const cors = require('cors')
const todoRoutes = require('./routes/todos.js')
const userRoutes = require('./routes/users')
const weatherRoutes = require('./routes/weather')
const { errorHandler } = require('./middlewares/errorHandler.js')

const port = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', userRoutes)
app.use('/', weatherRoutes)
app.use('/todos', todoRoutes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`app is running at port ${port}`)
})