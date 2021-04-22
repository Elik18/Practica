import express from 'express';
import { expressConfig } from './config';

const main = async (): Promise<void> => {
    const app = express();
    await expressConfig(app);
    app.listen(3000, () => {
        console.log('server on port 3000');
    });
}

export default main();