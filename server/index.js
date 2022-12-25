import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

const app = express();
dotenv.config();
mongoose.set('strictQuery', false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log('Connected to mongoDB.')
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected!');
});

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.listen(process.env.PORT, () => {
    connect();
    console.log("Connected to backend.");
});
