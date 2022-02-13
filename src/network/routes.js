import * as server from './server';
import message from '../components/message/network';

server.use('/message', message);

export default server;