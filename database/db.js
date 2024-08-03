import mongoose from "mongoose";
require('dotenv').config()

export const DBConnection = async() =>{
    const MONGODB_URL = process.env.MONGODB_URL;
    try{

        await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});
        console.log('Database Connected Successfully');
    }
    catch(err){
        console.log("Error while connecting with the database",err.message);
    }
}

// export default DBConnection;