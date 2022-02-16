import User from './model';
import { Logger } from '../../network/http';
import Message from '../message/model';

export function save(user) {
    const handle = (resolve, reject) => {
        const userM = new User(user);
        resolve(userM.save());
    };

    return new Promise(handle);
}

export async function getAll() {
    const users = await User.find();

    return Promise.resolve(users);
}

export async function updateUser(id, user) {
    const logger = new Logger('Database::updateUser');

    try {
        const userM = await User.findOne({
            _id: id
        });
    
        userM.user = user;
        const dataUpdate = await userM.save();

        return Promise.resolve(dataUpdate);
    } catch (error) {
        logger.error(error);
        return Promise.resolve('La operacion no pudo realizarce');
    }
}

export async function getUser(id) {
    const logger = new Logger('Database::getUser');

    try {
        const userM = await User.findOne({
            _id: id,
        });

        return Promise.resolve(userM);
    } catch (error) {
        logger.error(error);
        return Promise.reject('El usuario no existe');
    }
}

export async function deleteUser(id) {
    const logger = new Logger('Database::deleteUser');

    try {
        const userM = await User.deleteOne({
            _id: id
        });

        const messageM = await Message.deleteMany({
            user_id: id
        });

        if (userM && messageM) {
            return Promise.resolve('El usuario y todos sus datos fueron eliminados');
        } else {
            logger.error('El usario con el ID: ' + id + ' no existe');
            return Promise.reject('No se puedo realizar la operacion');
        }
    } catch (error) {
        logger.error(error);
        return Promise.reject('No se puedo realizar la operacion');
    }
}