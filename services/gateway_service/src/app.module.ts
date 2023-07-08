import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserServiceController } from './controllers/user-service.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import CLIENT_SERVICE_REGISTERY from './services/client.service';

@Module({
  imports: [
    ClientsModule.register(CLIENT_SERVICE_REGISTERY),
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
      ignoreEnvFile: false,
      isGlobal: true,
      cache: true,
    }),
  ],
  controllers: [AppController, UserServiceController],
  providers: [AppService],
})
export class AppModule {}
