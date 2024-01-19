import { Criminal } from '../criminals.schema';
import { PickType } from '@nestjs/swagger';

export class CriminalsRequestDto extends PickType(Criminal, [
  'email',
  'password',
  'name',
  'schoolnum',
  'idnum',
  'tier',
] as const) {}
