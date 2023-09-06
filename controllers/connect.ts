require('dotenv').config();
import mongoose from 'mongoose';



const connection = mongoose.connect(String(process.env.mongoURL));



export { connection };
