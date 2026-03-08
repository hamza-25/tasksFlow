import {type Request, type Response} from 'express';
import { sendResponse } from '../../utils/sendResponse.js';
import { authRegister, authLogin } from './auth.service.js';

export const login = async (req: Request, res: Response) => {
    const getAccessToken = await authLogin(req, res);
    sendResponse(res, 200, 'Login successful', getAccessToken);
}  

export const register = async (req: Request, res: Response) => {
    const user = await authRegister(req, res);
    sendResponse(res, 201, 'Registration successful', user);
}  