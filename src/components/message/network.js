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
            .getAll()
            .then(success)
            .catch(error);    
});

router.get('/user/:id', (req, res) => {
    const { id } = req.params;

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
            .getMessages(id)
            .then(success)
            .catch(error);
});

router.post('/user/:id', (req, res) => {
    const { id } = req.params;
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
        .addMessage(id, body.message)
        .then(success)
        .catch(error);
});

router.patch('/user/:id', (req, res) => {
    const { id:user_id } = req.params;
    const { message, id:message_id } = req.body;

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
        .updateMessage(message_id, user_id, message)
        .then(success)
        .catch(error);
});

router.delete('/user/:id', (req, res) => {
    const { id:message_id } = req.body;
    const { id:user_id } = req.params;

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
        .deleteMessage(message_id, user_id)
        .then(success)
        .catch(error);
});

export default router;