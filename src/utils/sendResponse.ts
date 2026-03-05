import { type Response } from "express"

export const sendResponse = (res: Response, statusCode: number, message: string, data=null) => {
    return res.status(statusCode).json({
        success: true,
        statusCode,
        message,
        data
    });
}