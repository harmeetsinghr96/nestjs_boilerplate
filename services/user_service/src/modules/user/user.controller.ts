import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { IUserRegisterDto } from './user.interface';
import { UtilsService } from 'src/services/utils.service';

@Controller()
export class UserController {
  private logger = new Logger();

  constructor(
    private userService: UserService,
    private utilsService: UtilsService,
  ) {}

  @MessagePattern({ cmd: 'register' })
  async register(data: IUserRegisterDto) {
    try {
      await this.userService.register(data);
      return this.utilsService.response(200, 'Register successfully.');
    } catch (error) {
      this.logger.log(String(error), error);
      return this.utilsService.response(400, String(error), error);
    }
  }
}
