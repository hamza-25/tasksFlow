import express, {type Request, type Response, type Application, type NextFunction} from 'express';
import dotenv from 'dotenv';
import authRoute from './modules/auth/auth.routes.js';
dotenv.config();
import { errorHandler } from './utils/errorHandler.js';
import AppError from './utils/AppError.js';
 
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoute);

app.use((_req: Request, res: Response, next: NextFunction) => {
    next(new AppError('Route not found', 404));
});

// Global error handling middleware
app.use(errorHandler);

export default app;