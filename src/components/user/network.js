import { Router } from 'express';
import * as controller from './controller';
import * as response from '../../network/response';

const router = Router();

router.get('/', (req, res) => {
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
        .getAll()
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
        .addUser(body.user)
        .then(success)
        .catch(error);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

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
        .deleteUser(id)
        .then(success)
        .catch(error);
});

export default router;