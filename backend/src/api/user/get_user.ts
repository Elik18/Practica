import { Response, Request, NextFunction } from 'express';
import { connection } from '../../config';
import { Pool } from 'mysql2/promise';
import { UserInterfaces } from '../../interfaces';

const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const pool: Pool = await connection();
        const user = req.params as UserInterfaces.User;
        const query = await pool.query('SELECT * FROM usuario WHERE ID_User = ?', [user.id]);
        await pool.end();
        res.status(201).json(query[0]);
    }
    catch (e) {
        next(e);
    }
}

export default getUser;