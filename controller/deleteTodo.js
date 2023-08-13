const Todo = require("../models/todo");

exports.deleteTodo = async (req,res)=>{
    try{
        const id=req.params.id;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"Data get DELETED",
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            message:err.message,
        });

    }
    }