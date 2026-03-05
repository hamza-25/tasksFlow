import {type Request, type Response} from 'express';

export const login = async (req: Request, res: Response) => {
    return res.status(200).json({message: 'Login successful'});
}  

export const register = async (req: Request, res: Response) => {
    return res.status(200).json({message: 'Registration successful'});
}  