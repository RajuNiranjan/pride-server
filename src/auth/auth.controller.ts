import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from 'src/dto/SignUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  Register(
    @Body() signUpDto: SignUpDto,
  ): Promise<{ token: string; user: any }> {
    return this.authService.register(signUpDto);
  }
}
