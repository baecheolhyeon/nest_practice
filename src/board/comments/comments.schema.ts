import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Comments extends Document {
  @ApiProperty({
    description: '댓글 작성자',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  author: string;

  @ApiProperty({
    description: '댓글 내용',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  text: string;

  @ApiProperty({
    description: '댓글',
  })
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'comments' }] })
  replies: Comment[];
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
