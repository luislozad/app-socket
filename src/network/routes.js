import * as server from './server';
import message from '../components/message/network';
import user from '../components/user/network';

server.use('/message', message);
server.use('/user', user);

export default server;