import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
//import { Payload } from './jwt.payload';
import { CriminalsRepository } from 'src/criminals/criminals.repository';
import { Payload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly criminalsRepository: CriminalsRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) {
    const criminal = await this.criminalsRepository.findCatByIdWithoutPassword(
      payload.sub,
    );

    if (criminal) {
      return criminal; // request.user
    } else {
      throw new UnauthorizedException('접근 오류');
    }
  }
}
