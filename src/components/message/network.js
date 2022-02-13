import { Router } from 'express';
import * as response from '../../network/response';
import * as controller from './controller';

const router = Router();

router.get('/', (req, res) => {
    const success = (msg) => {
        response
            .success(req, res)
            .status(200)
            .send(msg);
    };

    const error = (e) => {
        response
            .error(req, res)
            .status(400)
            .send(e);
    };

    controller
        .getMessages()
        .then(success)
        .catch(error);
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

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { message } = req.body;

    const success = (r) => {
        response
            .success(req, res)
            .status(200)
            .send(r);
    };

    const error = (e) => {
        response
            .error(req, res)
            .status(400)
            .send(e);
    };

    controller
        .updateMessage(id, message)
        .then(success)
        .catch(error);
});

export default router;