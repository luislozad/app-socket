import './database';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import router from './network/routes';

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
router.config(app);

app.use('/app', express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, () => console.log('Escuchando en el puerto ' + PORT));