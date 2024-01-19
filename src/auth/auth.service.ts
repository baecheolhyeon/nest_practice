import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CriminalsRepository } from 'src/criminals/criminals.repository';
import { LoginRequestDto } from './login.dto.ts/login.request.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly criminalRepository: CriminalsRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogin(data: LoginRequestDto) {
    const { email, password } = data;

    const criminal = await this.criminalRepository.findCatByEmail(email);
    if (!criminal) {
      throw new UnauthorizedException('이메일과 비밀번호 확인');
    }

    //비밀번호 일치 확인
    const isPasswordValidate: boolean = await bcrypt.compare(
      password,
      criminal.password,
    );

    if (!isPasswordValidate) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주새요');
    }

    const payload = { email: email, sub: criminal.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
