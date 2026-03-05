class AppError extends Error {
    readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);

        this.statusCode = statusCode;
        this.message = message;

        Error.captureStackTrace(this, this.constructor);

    }
}

export default AppError;