import { PickType } from '@nestjs/swagger';
import { Posts } from '../posts.schema';

export class CreatePostDto extends PickType(Posts, [
  'title',
  'content',
] as const) {}
