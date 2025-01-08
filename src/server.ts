import express, { Express, Request, Response } from "express";
import path from 'path';
import movieRouter from "./MovieApp/movieRouter";
import cors from 'cors';

const app: Express = express();

const HOST: string = 'localhost';
const PORT: number = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join('templates'));
app.set('json spaces', 2);

app.use(express.json());
app.use(cors());
app.use('/static/', express.static(path.join(__dirname, 'static')));
app.use('/movie/', movieRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('main page');
})

app.listen(PORT, HOST, () => {
    console.log("running");
})