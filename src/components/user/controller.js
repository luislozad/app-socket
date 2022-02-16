import { Logger } from "../../network/http";
import * as store from './store';

export async function addUser(user) {    
    const logger = new Logger('userController::addUser');

    const response = {
        user,
        date: new Date(),
    };
        
    const handle = (resolve, reject) => {
        if (!user) {
            logger.error('Datos incompletos para user');
            reject('Los datos enviados no estan completos');
        } else {
            resolve(store.save(response));
        }
    };

    return new Promise(handle);
}

export async function getAll() {
    const handle = (resolve, reject) => {
        resolve(store.getAll());
    };

    return new Promise(handle);
}

export async function updateUser(id, user) {
    const logger = new Logger('userController::updateUser');

    const handle = async (resolve, reject) => {
        if (!id || !user) {
            logger.error('Datos incompletos para id o user');
            reject('Algo salio mal');
        } else {
            const updateMessage = await store.updateUser(id, user);
            resolve(updateMessage);
        }
    };

    return new Promise(handle);
}

export async function deleteUser(id) {
    const logger = new Logger('userController::deleteUser');

    const handle = (resolve, reject) => {
        if (!id) {
            logger.error('No se envia un ID correcto ID:' + id);
            reject('Algo salio mal');
        } else {
            resolve(store.deleteUser(id));
        }
    };

    return new Promise(handle);
}