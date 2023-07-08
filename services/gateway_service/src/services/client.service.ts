import { Transport, ClientsModuleOptions } from '@nestjs/microservices';

const CLIENT_SERVICE_REGISTERY: ClientsModuleOptions = [
  {
    name: 'USER_SERVICE',
    transport: Transport.TCP,
    options: {
      host: process.env.USER_SERVICE_HOST_NAME || '127.0.0.1',
      port: Number(process.env.USER_SERVICE_PORT) || 3001,
    },
  },
];

export default CLIENT_SERVICE_REGISTERY;
