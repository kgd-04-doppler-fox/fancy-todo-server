require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const todoRoute = require('./routes/todoRouter')
const userRoute = require('./routes/userRouter')
const errorHandler = require('./middlewares/errorHandler')


app.use(express.urlencoded({extended : true}))

app.use(express.json())

app.use('/', userRoute)

app.use('/todos', todoRoute)

app.use(errorHandler)

app.listen(port, (req, res) =>{
    console.log(`connected to port : ${port}`);
})
