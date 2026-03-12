import  { type Request, type Response } from 'express';
import bcrypt from 'bcryptjs';
import authRepository from './auth.repository.js';
import AppError from '../../utils/AppError.js';
import { generateRefreshToken, generateAccessToken } from '../../utils/token.js';
import { setCookie } from '../../utils/setCookie.js';

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

export const authLogin = async (req: Request, res: Response) => {
    // need validation email, password
    const { email, password } = req.body;
    const user = await authRepository.login(email);

    if(!user)
        throw new AppError('Invalid email or password', 400);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid)
        throw new AppError('Invalid email or password', 400);

    const accessToken = generateAccessToken({email: user.email, userId: user.id});
    const refreshToken = generateRefreshToken({email: user.email, userId: user.id});

    await authRepository.updateRefreshToken(user.id, refreshToken);

    setCookie(res, 'refreshToken', refreshToken);

    return accessToken;
}