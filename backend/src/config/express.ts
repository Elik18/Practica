import { Express, Request, Response } from 'express';
import { default as routes } from '../routes';

const express = async (app: Express) => {
    app.use(routes());
    app.use(function (_: Request, res: Response) {
        return res.status(404).json({
            status: 404,
            message: 'Not found'
        });
    });
}

export default express;