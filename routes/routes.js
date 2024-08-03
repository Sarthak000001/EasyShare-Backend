import express from 'express';
import { uploadImage ,downloadImage} from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();
// using upload.single() -> single file we are uploading 
router.post('/upload',upload.single('file'),uploadImage);

router.get('/file/:fileId',downloadImage);

export default router;