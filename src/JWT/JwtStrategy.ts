import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserSchema } from 'src/models/user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(UserSchema.name) private readonly userModel: Model<UserSchema>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(payload: any) {
    const { id } = payload;
    const user = await this.userModel.findById(id).select('-password').exec();
    if (!user) {
      throw new UnauthorizedException('Invalid Token');
    }
    return user;
  }
}
