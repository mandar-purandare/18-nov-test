import express from "express";
import router from "./Routes/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use('/api/v1/',router);
dotenv.config();



app.get('/',(req, res) => {res.send('Hello from backend')});
mongoose.connect(process.env.MONGO_URL).then(() => {console.log('Database is connected')});


app.listen(8000, () => {console.log('App running on port 8000')})