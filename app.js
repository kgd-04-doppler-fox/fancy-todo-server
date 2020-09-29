require('dotenv').config()
const express = require ('express')
const todoRoutes = require ('./routes/todos')
const userRoutes = require ('./routes/users')
const errorHandler = require ('./middleware/errorHandler')
const app = express()
const port = 3000
const Axios = require ('./controllers/coba')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/axios', Axios.axios)
app.use('/todos', todoRoutes)
app.use('/', userRoutes)
app.use(errorHandler)


app.listen(port, ()=> {
    console.log(`listening port ${port}`)
})




