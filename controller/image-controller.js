import path from "path";
import File from "../models/file.js";


export const uploadImage = async(request,respone) =>{
    console.log(request)
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
     }
    try{

       const file = await File.create(fileObj); 
       respone.status(200).json({path:`http://localhost:8000/file/${file._id}`})
    }
    catch(err){
        console.log(err.message);
        response.status(500).json({err:err.message});
    }
}

export const downloadImage = async(request,response) =>{
    try{
        const file = await File.findById(request.params.fileId)

        file.dowloadContent++;

        await file.save();

        response.download(file.path,file.name);
    }
    catch(err){
        console.error(err.message);
        return response.status(500).json({err:err.message});
    }
}