import { Response, Request, NextFunction } from 'express';
import { connection } from '../../config';
import { Pool } from 'mysql2/promise';

const getUsers = async (
    _: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const pool: Pool = await connection();
        const query = await pool.query('SELECT * FROM usuario');
        await pool.end();
        res.status(201).json(query[0]);
    }
    catch (e) {
        next(e);
    }
}

export default getUsers;