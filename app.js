const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/todos.js')
const errorHandler = (require('./middlewares/errorhandler.js'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/todos', routes)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`listen on port ${port}`)
})