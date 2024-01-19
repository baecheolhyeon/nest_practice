import { PickType } from '@nestjs/swagger';
import { Comments } from '../comments.schema';

export class Replies extends PickType(Comments, ['author', 'text'] as const) {}
