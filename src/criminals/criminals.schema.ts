import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Criminal extends Document {
  @ApiProperty({
    example: 'amamov@kakao.com',
    description: 'email',
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '1234123412341qwer',
    description: 'password',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(10, 50)
  password: string;

  @ApiProperty({
    example: 'baescheol',
    description: 'name',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '20514049',
    description: 'scholnumber',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(8, 8)
  schoolnum: string;

  @ApiProperty({
    example: '000101',
    description: 'idnumber',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(6, 6)
  idnum: string;

  @ApiProperty({
    example: 'Gold',
    description: 'tier',
  })
  tier: string;

  readonly readOnlyData: {
    id: string;
    email: string;
    name: string;
    schoolnum: string;
    tier: string;
  };
}

export const CriminalSchema = SchemaFactory.createForClass(Criminal);

CriminalSchema.virtual('readOnlyData').get(function (this: Criminal) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
    schoolnum: this.schoolnum,
    tier: this.tier,
  };
});
