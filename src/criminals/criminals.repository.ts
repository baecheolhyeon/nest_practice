import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Criminal } from './criminals.schema';
import { CriminalsRequestDto } from './dtos/criminals.request.dto';
import { Types } from 'mongoose';
@Injectable()
export class CriminalsRepository {
  constructor(
    @InjectModel(Criminal.name) private readonly criminalModel: Model<Criminal>,
  ) {}

  async findCatByIdWithoutPassword(
    criminalId: string | Types.ObjectId,
  ): Promise<Criminal | null> {
    const criminal = await this.criminalModel
      .findById(criminalId)
      .select('-password');
    return criminal;
  }

  async findCatByEmail(email: string): Promise<Criminal | null> {
    const user = await this.criminalModel.findOne({ email });
    return user;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.criminalModel.exists({ email });
    if (result) return true;
    else return false;
  }

  async create(criminal: CriminalsRequestDto): Promise<Criminal> {
    return await this.criminalModel.create(criminal);
  }
}
