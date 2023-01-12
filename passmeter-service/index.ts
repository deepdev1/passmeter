import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import zxcvbn from 'zxcvbn';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Password Meter Service ⚙️');
});

app.post('/password', (req:Request, res:Response) => {
    const password = req.body.password;
    if(!password) {
        res.status(500).send("Bad Request");
    } else {
        res.json(zxcvbn(password));
    }
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});