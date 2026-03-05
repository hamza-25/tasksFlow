import express, {type Request, type Response, type Application} from 'express';
import dotenv from 'dotenv';
import authRoute from './modules/auth/auth.routes.js';
dotenv.config();
 
const app: Application = express();

app.use('/api/auth', authRoute);
app.get('*', (req: Request, res: Response) => {
    res.status(404).json({message: 'Wrong URI endpoint'});
});

export default app;