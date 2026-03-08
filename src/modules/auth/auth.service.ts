import  { type Request, type Response } from 'express';
import bcrypt from 'bcryptjs';
import authRepository from './auth.repository.js';
import AppError from '../../utils/AppError.js';

export const authRegister = async (req: Request, res: Response) => {
    // need validation fullName, email, password
    const { fullName, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT as string));
    const user = await authRepository.register(fullName, email, hashPassword);

    if(!user){
        throw new AppError('Registration failed', 400);
    }
    
    const { password: _password, refreshToken: _refreshToken, ...userWithoutPassword } = user;

    return userWithoutPassword;
}