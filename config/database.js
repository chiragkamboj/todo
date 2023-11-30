const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(proccess.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("db connect successfull"))
    .catch((error)=>{
        console.log("db connection is unsuccessfull");
        console.error(error.message);
        process.exit(1);
    });
}


module.exports=dbConnect;