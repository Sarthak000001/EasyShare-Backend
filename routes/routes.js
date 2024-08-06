import express from 'express';
import { uploadImage ,downloadImage,serveDownload} from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();
// using upload.single() -> single file we are uploading 
router.post('/upload',upload.single('file'),uploadImage);

router.get('/file/:fileId',downloadImage);

// Route for actual file download
router.get('/file/download/:fileId', serveDownload);
export default router;
