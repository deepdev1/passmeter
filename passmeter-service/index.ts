import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import zxcvbn, { ZXCVBNResult } from 'zxcvbn';
import { ApiRequest, ApiResponse } from './model';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.send('Password Meter Service ⚙️');
});

app.post('/strength', (req:Request, res:Response) => {
    const requestBody:ApiRequest = req.body;
    if(!requestBody || !requestBody.password) {
        res.status(500).send("Bad Request");
    } else {
        const response:ZXCVBNResult = zxcvbn(requestBody.password);
        res.json(response);
    }
});


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});