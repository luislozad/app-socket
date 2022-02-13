import { Logger } from "../../network/http";

 export function addMessage(user, message) {
    const err = new Logger('messageController');
     
    const response = {
        user,
        message,
        data: new Date(),
    };
        
    const handle = (resolve, reject) => {
            if (!user || !message) {
             err.logger.error('No hay usuario o mensaje');
             reject('Los datos enviados no estan completos');
         } else {
             resolve(response);
         }
     };

     return new Promise(handle);
 }