export interface IUserRegisterDto {
  name: { firstName: string; lastName: string };
  email: string;
  password: string;
}
