import jwt from 'jsonwebtoken';

interface payloadData {
    email: string;
    userId: number;
    role: string
}

export const generateAccessToken = (payload: payloadData) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '15m' });
}
export const generateRefreshToken = (payload: payloadData) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '7d' });
}
export const verifyAccessToken = (accessToken: string): payloadData => {
    return jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET as string) as payloadData;
}
export const verifyRefreshToken = (refreshToken: string): payloadData => {
    return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string) as payloadData;
}