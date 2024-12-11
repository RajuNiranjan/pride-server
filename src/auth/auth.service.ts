import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUpDto } from '../dto/SignUp.dto';
import { User } from 'src/models/user.model';
import { LogInDto } from 'src/dto/LogIn.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(signUpDto: SignUpDto): Promise<{ token: string; user: any }> {
    const {
      acceptTerms,
      dob,
      email,
      gender,
      isPrivate,
      isVerified,
      mobileNumber,
      password,
      profileBannerPicture,
      profilePicture,
      userName,
    } = signUpDto;

    const user = await this.userModel.findOne({
      $or: [{ email }, { mobileNumber }, { userName }],
    });

    if (user) {
      throw new UnauthorizedException(
        'User already existed with this email,mobileNumber or username',
      );
    }

    const Dob = new Date(dob);
    const presentDate = new Date();

    const age = presentDate.getFullYear() - Dob.getFullYear();
    const monthDifference = presentDate.getMonth() - Dob.getMonth();

    const isAdult =
      age > 18 ||
      (age === 18 && monthDifference > 0) ||
      (age === 18 &&
        monthDifference === 0 &&
        presentDate.getDate() >= Dob.getDate());

    if (!isAdult) {
      throw new BadRequestException('You must be 18 years old to sign up');
    }

    if (!acceptTerms) {
      throw new BadRequestException('you must accept the terms and conditions');
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await this.userModel.create({
      acceptTerms,
      dob,
      email,
      gender,
      isPrivate,
      isVerified,
      mobileNumber,
      password: hashPassword,
      profileBannerPicture,
      profilePicture,
      userName,
    });

    const token = this.jwtService.sign({ id: newUser._id });
    return { token, user: newUser };
  }

  async logIn(logInDto: LogInDto): Promise<{ user: any; token }> {
    const { emailOrUserName, password } = logInDto;

    console.log(emailOrUserName, password);

    const user = await this.userModel.findOne({
      $or: [{ email: emailOrUserName }, { userName: emailOrUserName }],
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    console.log(user.password === password);

    const validatePassword = await bcrypt.compareSync(password, user.password);
    if (!validatePassword) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = this.jwtService.sign({ id: user._id });
    return { user, token };
  }
}
