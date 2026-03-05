import express, {type Request, type Response, type Application} from 'express';
import dotenv from 'dotenv';
import authRoute from './modules/auth/auth.routes.js';
dotenv.config();
 
const app: Application = express();

app.use('/api/auth', authRoute);

app.use((_req, res, _next) => {
    res.status(404).json({message: 'Route not found'});
});


export default app;