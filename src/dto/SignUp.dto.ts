import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';
import { Gender } from 'src/constants/Gender';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'email must be a valid email address' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{10}$/, {
    message: 'mobileNumber must be a valid 10-digit number',
  })
  mobileNumber: string;

  @IsNotEmpty()
  @IsString()
  dob: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  @IsString()
  profilePicture: string = 'http://profile.image.com';

  @IsNotEmpty()
  @IsString()
  profileBannerPicture: string = 'http://profile.image.com';

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/, {
    message:
      'Password must be 8-15 characters long, contain at least one uppercase letter, one number, and one special character.',
  })
  password: string;

  @IsNotEmpty()
  @IsBoolean()
  isVerified: boolean = false;

  @IsNotEmpty()
  @IsBoolean()
  isPrivate: boolean = false;

  @IsNotEmpty()
  @IsBoolean()
  acceptTerms: boolean = false;
}
