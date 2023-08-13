const Todo = require("../models/todo");

exports.getTodo = async (req,res)=>{
    try{
        const todos=await Todo.find({});
        res.status(200).json(
            { success:true,
              data:todos,
              message:"Entire todo data is fetched",
            });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"error in server",
            message:err.message,
        });
    }
    }

    //other controller getTodoById in same 
    exports.getTodoById=async (req,res)=>{
        try{
            //id find krna 
            const id = req.params.id;
            const todo =await Todo.findById({_id:id});
            if(!todo){
                return res.status(404).json({
                    success:false,
                    message:"No data found with given Id",
                });
            }
            res.status(200).json({
                success:true,
                data:todo,
                message:"data sucessfully found at given id",
            });
        }
        catch(err){
            console.log(err);
            console.err(err);
            res.status(500).json({
                success:false,
                data:"error happens",
                message:err.message,
            });

        }
    }