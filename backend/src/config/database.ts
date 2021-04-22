import { createPool, Pool } from 'mysql2/promise';

const connection = async (): Promise<Pool> => {
    const config = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'clinicautp'
    };
    const pool: Pool = createPool(config);

    return pool;
}

export default connection;