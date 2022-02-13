import { Logger } from "../../network/http";
import Model from "./model";

export function save(message) {
    const handle = (resolve, reject) => {
        const messageM = new Model(message);
        messageM.save();
        resolve(true);
    };

    return new Promise(handle);
}

export function getElement(k) {
    const s = clone();
    return s[k];
}

export async function getAll() {
    const messageM = await Model.find();

    return Promise.resolve(messageM);
}

export async function updateMessage(id, message) {
    const logger = new Logger('Database::updateMessage');
    try {
        const messageM = await Model.findOne({
            _id: id,
        });
    
        messageM.message = message;
        const dataUpdate = await messageM.save();

        return Promise.resolve(dataUpdate);
    } catch (error) {
        logger.error(error);
        return Promise.resolve('La operacion no pudo realizarce');
    }
}