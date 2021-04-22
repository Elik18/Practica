import { Router } from 'express';
import { signIn, users } from '../api';

export default () => {
    const router = Router();
    //RUTA SIGNIN
    router.route('/signin').get(signIn);
    //RUTA USERS
    router.route('/users').get(users.getUsers);
    //RUTA EDIT USER
    router.route('/user/:id').get(users.getUser);
    return router;
}