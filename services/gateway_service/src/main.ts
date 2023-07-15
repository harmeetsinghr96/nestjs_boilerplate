import helmet from 'helmet';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger();
  /** initializing application */
  const app = await NestFactory.create(AppModule);
  /** initialize confgi service to get excess all the env's local */
  const configService = app.get<ConfigService>(ConfigService);
  /** initialize middlewares */
  app.enableCors();
  app.enableVersioning();
  app.use(helmet({ crossOriginEmbedderPolicy: false }));
  /** initialize host and port */  app.setGlobalPrefix(configService.get('SERVICE_NAME'));

  const host = process.env.HOST_NAME || configService.get('HOST_NAME');
  const port = process.env.PORT || configService.get('PORT');
  /** start application on host and port */
  await app.listen(port, host);
  /** print log if server has been started */
  logger.log(`Gateway service is listening on ${host}:${port}`);
}

bootstrap();
