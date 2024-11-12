import express, { Express, Request, Response } from "express";
import path from 'path'

const app: Express = express();

const HOST: string = 'localhost';
const PORT: number = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join('templates'))

app.use('/static/', express.static(path.join(__dirname, 'static')))

app.get('/', (req: Request, res: Response) => {
    res.send('main page')
})

app.listen(PORT, HOST, () => {
    console.log("running")
})