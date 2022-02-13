import { Router } from 'express';
import * as response from '../../network/response';
import * as controller from './controller';

const router = Router();

router.get('/', (req, res) => {
    response
        .success(req, res)
        .status(200)
        .send('Hola mundo');
});

router.post('/', (req, res) => {
    const { body } = req;

    const success = (r) => {
        response
        .success(req, res)
        .status(201)
        .send(r);
    };

    const error = (e) => {
        response
            .error(req, res)
            .status(400)
            .send(e);
    };

    controller
        .addMessage(body.user, body.message)
        .then(success)
        .catch(error);
});

export default router;