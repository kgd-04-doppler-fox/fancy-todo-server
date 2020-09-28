require(`dotenv`).config()
const express = require(`express`)
const app = express()
const port = process.env.PORT
const router = require(`./routes/index`)
const errrorHandler = require(`./middlewares/errorHandlers`)


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(`/`,router)
app.use(errrorHandler)


app.listen(port, ()=>{
    console.log(`App on http://localhost:${port}`)
})