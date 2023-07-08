import { Body, Controller, Param, Post } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller()
export class UserServiceController {
  constructor(private readonly appService: AppService) {}

  @Post('/v1/post-users/:pattern')
  postUsers(@Param() params, @Body() data) {
    return this.appService.callUserService(params, data);
  }
}
