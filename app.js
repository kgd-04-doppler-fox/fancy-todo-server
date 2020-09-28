const express = require('express')
const app = express()
const PORT = 3000

const todoRoutes = require ('./routes/todos')
const userRoutes = require ('./routes/users')

const errorHandler = require ('./middlewares/errorHandler')

app.use(express.urlencoded ({extended: false}))
app.use(express.json())

app.use('/', userRoutes)
app.use('/todos', todoRoutes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`running app on port ${PORT}`)
})