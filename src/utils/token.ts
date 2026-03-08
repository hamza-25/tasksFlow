import jwt from 'jsonwebtoken';

interface payloadData {
    email: string;
    userId: number;
    role: string
}

export const generateAccessToken = (payload: payloadData) => {}
export const generateRefreshToken = (payload: payloadData) => {}
export const verifyAccessToken = (accessToken: string) => {}
export const verifyRefreshToken = (accessToken: string) => {}