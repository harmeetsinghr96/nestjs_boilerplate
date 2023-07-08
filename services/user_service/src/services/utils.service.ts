import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  response(status: number, message: string, data: Record<string, any> = {}) {
    const obj: Record<string, any> = { status, message };
    if (status === 400 || status === 422) obj.error = data;
    else obj.data = data;
    return obj;
  }

  throwError(message: string, errors: Record<string, any> = {}) {
    const error: Record<string, any> = new Error(message);
    error.error = errors;
    return error;
  }
}
