import express from 'express';
import router from './routes/routes.js'
import cors from 'cors';
import {DBConnection} from './database/db.js';
import 'dotenv/config'
const app = express();

app.use(cors());
app.use('/',router);

const PORT = process.env.PORT || 4000;

DBConnection();

app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`))
