import mongoose from "mongoose";
import { Logger } from '../network/http';

const logger = new Logger('Database');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {    
    logger.info('Db conectada con exito');
}).catch(() => {
    logger.error('No se pudo conectar a la base de datos');
});