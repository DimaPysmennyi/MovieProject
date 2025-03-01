import express, { Express, Request, Response } from "express";
import path from 'path';
import movieRouter from "./MovieApp/movieRouter";
import userRouter from './UserApp/userRouter';
import cors from 'cors';

const app: Express = express();

const HOST: string = 'localhost';
const PORT: number = 8000;

app.set('view engine', 'ejs');
app.set('json spaces', 2);

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000/']
}));
app.use('/movie/', movieRouter);
app.use('/user/', userRouter)

app.listen(PORT, HOST, () => {
    console.log("running");
})