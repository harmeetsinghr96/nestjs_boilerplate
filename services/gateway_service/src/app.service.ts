import { Injectable, Scope, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable({ scope: Scope.REQUEST })
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
  ) {}

  callUserService(params: any, data: any) {
    return this.userService
      .send<string>({ cmd: params.pattern }, data)
      .pipe(map((data: string) => data));
  }
}
