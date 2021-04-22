import { Response, Request, NextFunction } from 'express';

const signIn = (
    _: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        res.status(201).json({ message: 'signin' });
    }
    catch (e) {
        next(e);
    }
}

export default signIn;