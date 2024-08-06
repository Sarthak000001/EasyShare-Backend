import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    path:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    dowloadContent:{
        type:Number,
        require:true,
        default:0
    },
    password:{
        type:String,
        require:false
    }
})

const File = mongoose.model('file',fileSchema);
export default File;
