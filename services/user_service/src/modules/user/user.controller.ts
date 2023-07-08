import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { IUserRegisterDto } from './user.interface';
import { UtilsService } from 'src/services/utils.service';

@Controller()
export class UserController {
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
      return this.utilsService.response(400, String(error), error);
    }
  }
}
