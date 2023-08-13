const express= require('express');
const app=express();

//load config from env file 
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//use middle ware to parse the data 
app.use(express.json());

//import routes 
const todoRoutes =require("./routes/todos");

//mount todo API routes 
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
});

//conection with database 
const dbConnect =require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
res.send(`<h1>This is Home Page</h1>`);
});

