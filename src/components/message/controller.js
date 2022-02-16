import { Logger } from "../../network/http";
import * as store from './store';


export function addMessage(user_id, message) {      
    const logger = new Logger('messageController::addMessage');

    const response = {
        user_id,
        message,
        date: new Date(),
    };
        
    const handle = (resolve, reject) => {
        if (!user_id || !message) {
            logger.error('Datos incompletos para user_id o message');
            reject('Los datos enviados no estan completos');
        } else {
            store.save(response);
            resolve(response);
        }
    };

    return new Promise(handle);
}

export function getMessages(user_id) {
    const handle = (resolve, reject) => {
        resolve(store.getMessages(user_id));
    };

    return new Promise(handle);
}

export function getAll() {
    const handle = (resolve, reject) => {
        resolve(store.getAll());
    };

    return new Promise(handle);
}

export function updateMessage(id, user_id, message) {
    const logger = new Logger('messageController::updateMessage');

    const handle = async (resolve, reject) => {
        if (!id || !message || !user_id) {
            logger.error('Datos incompletos para id, message o user_id');
            reject('Algo salio mal');
        } else {
            const updateMessage = await store.updateMessage(id, user_id, message);
            resolve(updateMessage);
        }
    };

    return new Promise(handle);
}

export async function getMessage(id) {
    const handle = async (resolve, reject) => {
        resolve(store.getMessage(id));
    };

    return new Promise(handle);
}

export async function deleteMessage(message_id, user_id) {
    const handle = (resolve, reject) => {
        resolve(store.deleteMessage(message_id, user_id));
    };

    return new Promise(handle);
}