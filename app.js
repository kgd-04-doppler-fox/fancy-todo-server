const express = require ('express')
const todoRoutes = require ('./routes/todos')
const app = express()
const port = 3000


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/todos', todoRoutes)

app.listen(port, ()=> {
    console.log(`listening port ${port}`)
})




