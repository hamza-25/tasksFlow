import {type Request, type Response} from 'express';
import { sendResponse } from '../../utils/sendResponse.js';

export const login = async (req: Request, res: Response) => {
    sendResponse(res, 200, 'Login successful')
}  

export const register = async (req: Request, res: Response) => {
    sendResponse(res, 200, 'Registration successful')

}  