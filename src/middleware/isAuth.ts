import {type Request, type Response, type NextFunction} from 'express';
import { verifyAccessToken } from '../utils/token.js';
import AppError from '../utils/AppError.js';
import { prisma } from '../database/database.js';

export const isAuth = (req: Request, _res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        throw new AppError('Access denied. No token provided.', 401);
    }

    try {
        const decoded = verifyAccessToken(token);
        const user = prisma.user.findUnique({
            where: {
                id: decoded.userId,
            },
            include: {
                roles: {
                    include: {
                        permissions: true,
                    }
                }
            }
        });

        if (!user) {
            throw new AppError('User not found.', 404);
        }

        req.user = user;
        next();
    } catch (error) {
        throw new AppError('Invalid or expired token.', 401);
    }
};