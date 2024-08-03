import mongoose from "mongoose";
import { type } from "os";


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
    }
})

const File = mongoose.model('file',fileSchema);
export default File;