import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CriminalsRequestDto } from './dtos/criminals.request.dto';
import * as bcrypt from 'bcrypt';
import { CriminalsRepository } from './criminals.repository';

@Injectable()
export class CriminalsService {
  constructor(private readonly criminalsRepository: CriminalsRepository) {}
  async signUp(body: CriminalsRequestDto) {
    const { email, password, name, schoolnum, idnum, tier } = body;
    const isCatExit = await this.criminalsRepository.existsByEmail(email);
    if (isCatExit) {
      throw new UnauthorizedException('해당하는 고양이는 이미 존재합니다, 403');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const criminal = await this.criminalsRepository.create({
      email,
      password: hashedPassword,
      name,
      schoolnum,
      idnum,
      tier,
    });

    return criminal.readOnlyData;
  }
}
