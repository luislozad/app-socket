import { Logger } from "../../network/http";
import Message from "./model";

export function save(message) {
    const handle = (resolve, reject) => {
        const messageM = new Message(message);
        messageM.save();
        resolve(true);
    };

    return new Promise(handle);
}

export async function getMessages(user_id) {
    const logger = new Logger('Database::getMessages');

    try {
        const messageM = await Message.find({
            user_id,
        });

        return Promise.resolve(messageM);
    } catch (error) {
        logger.error(error);
        return Promise.reject('El usuario aun no tiene mensajes');
    }
}

export async function getMessage(id) {
    const logger = new Logger('Database::getMessage');

    try {
        const messageM = await Message.findOne({
            _id: id,
        });

        return Promise.resolve(messageM);
    } catch (error) {
        logger.error(error);
        return Promise.reject('El usuario no existe');
    }
}

export async function getAll() {
    const messageM = await Message.find();

    return Promise.resolve(messageM);
}

export async function updateMessage(id, user_id, message) {
    const logger = new Logger('Database::updateMessage');
    try {
        const messageM = await Message.findOne({
            _id: id,
            user_id
        });
    
        messageM.message = message;
        const dataUpdate = await messageM.save();

        return Promise.resolve(dataUpdate);
    } catch (error) {
        logger.error(error);
        return Promise.resolve('La operacion no pudo realizar');
    }
}

export async function deleteMessage(message_id, user_id) {
    const logger = new Logger('Database::deleteMessage');
    try {
        const messageM = await Message.deleteOne({
            _id: message_id,
            user_id
        });

        if (messageM) {
            return Promise.resolve(`Mensaje ${message_id} eliminado`);
        } else {
            logger.error(`No se pudo elimiar el mensaje, no existe el ID ${message_id}`);
            return Promise.reject('No se pudo completar la operacion');
        }

    } catch (error) {
        logger.error(error);
        return Promise.reject('No se pudo completar la operacion');
    }
}