const express = require('express')
const app = express()
const port = 3000
const todoRoute = require('./routes/todoRouter')

app.use(express.urlencoded({extended : true}))

app.use(express.json())

app.use(todoRoute)

app.listen(port, (req, res) =>{
    console.log(`connected to port : ${port}`);
})
