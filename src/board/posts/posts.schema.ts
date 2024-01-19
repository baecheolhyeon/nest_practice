import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

import { Comments, CommentsSchema } from '../comments/comments.schema';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Posts extends Document {
  @ApiProperty({
    description: '게시물 제목',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: '게시물 내용',
    required: true,
  })
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    description: '댓글',
  })
  @Prop({
    type: [CommentsSchema],
  })
  comments: Comments[];
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
