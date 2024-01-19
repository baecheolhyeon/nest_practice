import { PickType } from '@nestjs/swagger';
import { Criminal } from 'src/criminals/criminals.schema';

export class LoginRequestDto extends PickType(Criminal, [
  'email',
  'password',
] as const) {}
