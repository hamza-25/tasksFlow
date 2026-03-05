import express, {type Request, type Response, type Application} from 'express';
import dotenv from 'dotenv';
import authRoute from './modules/auth/auth.routes.js';
dotenv.config();
 
const app: Application = express();

app.use('/auth', authRoute);
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: 'Hello, World!'});
});

export default app;