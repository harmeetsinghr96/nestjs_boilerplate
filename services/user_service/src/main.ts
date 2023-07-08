import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const host = process.env.HOST_NAME || '127.0.0.1';
  const port = process.env.PORT || 3001;
  /** initializing microservice application */
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: { host, port },
  });

  app.listen();
  /** print log if server has been started */
  logger.log(`User service is listening on ${host}:${port}`);
}

bootstrap();
