require('dotenv').config()
const express = require ('express');
const app = express ();
const port = process.env.PORT;
const todoRoutes = require ('./router/todo_router');
const userRoutes = require ('./router/user_router')
const errorHandler = require ('./middleware/errorHandler');

app.use (express.urlencoded({ extended:false }));
app.use (express.json());

app.use ('/',userRoutes);
app.use ('/todos',todoRoutes);
app.use (errorHandler);

app.listen (port,() => {
    console.log(`Connect to ${port}`)
});