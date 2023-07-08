import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import validator from 'validator';

export type CaDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop(
    raw({
      firstName: {
        type: String,
        trim: true,
        required: [true, 'First name field is required.'],
      },
      lastName: { type: String, trim: true },
    }),
  )
  name: Record<string, any>;

  @Prop({
    type: String,
    index: true,
    unique: true,
    required: [true, 'Email field is required.'],
    validate: [validator.isEmail, 'Invalid email address.'],
  })
  email: string;

  @Prop({
    type: String,
    required: [true, 'Password field is required.'],
  })
  password: string;

  @Prop({
    type: String,
    enum: ['ADMIN', 'USER'],
    default: 'USER',
  })
  role: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  isDisabled: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
