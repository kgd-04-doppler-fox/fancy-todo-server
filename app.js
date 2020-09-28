const express = require ('express');
const app = express ();
const port = 4000;
const todoRoutes = require ('./router/todo_router');

app.use ('/todos',todoRoutes)

app.listen (port,() => {
    console.log(`Run at port:${port}`)
})