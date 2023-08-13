const mongoose =require('mongoose');
//yeh likhne se jitne bhi .env me data h isme agya 
require('dotenv').config();
const dbConnect=()=>{
    //yeh url yha kse aya ?
    //iske lie dotenv install krna hoga terminal pr 
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{console.log("connection sucessfull with DB")})
.catch((err)=>{console.log("error has came ",err)
//why??--->forcefull exit process in case of error 
// here exit(1) represents abnormal termination.
process.exit(1);
})
};
module.exports=dbConnect;