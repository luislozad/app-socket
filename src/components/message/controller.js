import { Logger } from "../../network/http";
import * as store from './store';


export function addMessage(user, message) {        
    const logger = new Logger('messageController::addMessage');

    const response = {
        user,
        message,
        data: new Date(),
    };
        
    const handle = (resolve, reject) => {
        if (!user || !message) {
            logger.error('No hay usuario o mensaje');
            reject('Los datos enviados no estan completos');
        } else {
            store.save(response);
            resolve(response);
        }
    };

    return new Promise(handle);
}

export function getMessages() {
    const handle = (resolve, reject) => {
        resolve(store.getAll());
    };

    return new Promise(handle);
}

export function updateMessage(id, message) {
    const logger = new Logger('messageController::updateMessage');

    const handle = async (resolve, reject) => {
        if (!id || !message) {
            logger.error('No se entrego ni ID, ni Message');
            reject('Algo salio mal');
        } else {
            const updateMessage = await store.updateMessage(id, message);
            resolve(updateMessage);
        }
    };

    return new Promise(handle);
}