//for create todo we need schema i.e, model 
//so here we import the model 
const Todo = require("../models/todo");

exports.createTodo = async (req,res)=>{
try{
//extract title and desc from request
const {title,description}=req.body;
//create a new todo obj and insert in DB
const response = await Todo.create({title,description});

//send json response with sucess flag
res.status(200).json(
    {
        success:true,
        data:response,
        message:"Entry created!"
    }
);
}
catch(err){
    console.error(err);
    console.log(err);
    res.status(500).json({
        success:false,
        data:"internal server issue",
        message:err.message,
    });
}
}

