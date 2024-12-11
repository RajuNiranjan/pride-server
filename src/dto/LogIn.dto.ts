import { IsNotEmpty, IsString } from 'class-validator';

export class LogInDto {
  @IsString()
  @IsNotEmpty()
  emailOrUserName: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
