import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { IUserRegisterDto } from './user.interface';
import { UtilsService } from 'src/services/utils.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly utilsService: UtilsService,
  ) {}

  async register(data: IUserRegisterDto): Promise<void> {
    const { email } = data;

    /** validate if email is already exists in records. */
    const isUser = await this.userModel.findOne({ email });
    if (isUser) throw this.utilsService.throwError('Email is already in use.');

    /** save current details of user into database. */
    await new this.userModel(data).save();
  }
}
