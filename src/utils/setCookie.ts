import {type Response } from "express";

export const setCookie = (res: Response, refreshToken: string, refreshTokenValue: string) => {
    res.cookie(refreshToken, refreshTokenValue, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
}