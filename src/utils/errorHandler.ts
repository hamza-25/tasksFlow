import { type Request, type Response, type NextFunction } from 'express';
import type AppError from './AppError.js';

export const errorHandler = (err: AppError, _req: Request, res: Response, _next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        statusCode,
        message: err.message || 'internal Server Error',
        data: null,
    });
}