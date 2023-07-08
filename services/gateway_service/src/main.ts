import helmet from 'helmet';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const host = process.env.HOST_NAME || '127.0.0.1';
  const port = process.env.PORT || 8081;
  /** initializing application */
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
    }),
  );
  await app.listen(port, host);
  /** print log if server has been started */
  logger.log(`Gateway service is listening on ${host}:${port}`);
}

bootstrap();
