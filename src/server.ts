import express, {type Request, type Response, type Application} from 'express';
import dotenv from 'dotenv';
dotenv.config();
 
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: 'Hello, World!'});
});

export default app;