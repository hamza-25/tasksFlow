import  { type Request, type Response } from 'express';
import bcrypt from 'bcryptjs';
import authRepository from './auth.repository.js';
import AppError from '../../utils/AppError.js';
import jwt from 'jsonwebtoken';

export const authRegister = async (req: Request, res: Response) => {
    // need validation fullName, email, password
    const { fullName, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT as string));
    const user = await authRepository.register(fullName, email, hashPassword);

    if(!user){
        throw new AppError('Registration failed', 400);
    }
    
    // const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '7d' });
    
    // await authRepository.updateRefreshToken(user.id, refreshToken);

    // res.cookie('refreshToken', refreshToken, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production',
    //     sameSite: 'strict',
    //     maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    // });
    
    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
}