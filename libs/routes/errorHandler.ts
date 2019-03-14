import { Error, NextFunction, Request, Response } from 'express';

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    const { error, message, status } = err;
    res.status(status || 500).send(
        {
            error: error || 'Not Found',
            message: message || 'error',
            status:  status || 500,
            timestamp: new Date(),
        },
    );

    next();
}
