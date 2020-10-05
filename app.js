if(process.env.NODE_ENV == "development"){
    require("dotenv").config()
}

require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const todoRouter = require('./routes/todo-router')
const userRouter = require('./routes/user-router')
const errorHandler = require('./middlewares/errorHandler')
const thirdPartyRouter = require('./routes/thirdParty')
const cors = require('cors')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use(thirdPartyRouter)
app.use(userRouter)
app.use('/todos', todoRouter)
app.use(errorHandler)

app.listen(port, ()=> {
    console.log('run: '+port)
})