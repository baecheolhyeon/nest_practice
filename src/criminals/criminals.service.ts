<<<<<<< HEAD
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
=======
import { Criminals, CriminalsType } from "./criminals.model";
import { Request, Response } from "express";

const member: CriminalsType[] = [];

export const readAllcriminals = (req: Request, res: Response) => {
  try {
    const criminals = Criminals;
    res.status(200).send({
      success: true,
      data: { criminals },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "failed",
    });
  }
};

export const readCriminals = (req: Request, res: Response) => {
  try {
    const params = req.params;
    Criminals.forEach((criminals) => {
      if (criminals.name === params.name) {
        member.push(criminals);
      }
    });
    res.status(200).send({
      success: true,
      data: {
        member,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "failed",
    });
  }
};

export const writeCriminals = (req: Request, res: Response) => {
  try {
    const body = req.body;
    Criminals.push(body);
    res.status(200).send({
      success: true,
      data: { body },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "failed",
    });
  }
};
>>>>>>> 23ff21f6965d34fecfff25acea2315046630b384
