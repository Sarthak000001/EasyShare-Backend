import File from "../models/file.js";
import bcrypt from 'bcrypt';

export const uploadImage = async(request,respone) =>{
    // console.log(request)
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
     }
     if (password) {
        const saltRounds = 10;
        fileObj.password = await bcrypt.hash(password, saltRounds);
    }
    try{

       const file = await File.create(fileObj); 
       respone.status(200).json({path:`https://easyshare-backend-0d13.onrender.com/file/${file._id}`})
    }
    catch(err){
        console.log(err.message);
        response.status(500).json({err:err.message});
    }
}

export const downloadImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);

        if (!file) {
            return response.status(404).json({ error: 'File not found' });
        }

        const password = request.query.password; 

        if (file.password) {
            if (!password) {
                return response.status(400).json({ error: 'Password required' });
            }

            const isMatch = await bcrypt.compare(password, file.password);
            console.log("isMatch : ",isMatch);
            if (!isMatch) {
                return response.status(403).json({ error: 'Invalid password' });
            }
        }

        file.dowloadContent++;
        await file.save();
        console.log("File ===> ",file)
        const fileUrl = `https://easyshare-backend-0d13.onrender.com/file/download/${file._id}`;
        response.status(200).json({ fileUrl });
   
    } catch (err) {
        console.error(err.message);
        response.status(500).json({ error: err.message });
    }
}

// New route for serving file download
export const serveDownload = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);
        if (!file) {
            return response.status(404).send('File not found');
        }
        response.download(file.path, file.name);
    } catch (err) {
        console.error(err.message);
        response.status(500).send('Server Error');
    }
};
