import { ApiProperty, PickType } from '@nestjs/swagger';
import { Criminal } from '../criminals.schema';

export class ReadonlyCriminalDto extends PickType(Criminal, [
  'email',
  'name',
  'schoolnum',
  'tier',
] as const) {
  @ApiProperty({
    example: '1',
    description: 'id',
    required: true,
  })
  id: string;
}
