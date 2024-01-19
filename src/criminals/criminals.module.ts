import { Module, forwardRef } from '@nestjs/common';
import { CriminalsController } from './criminals.controller';
import { CriminalsService } from './criminals.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Criminal, CriminalSchema } from './criminals.schema';
import { CriminalsRepository } from './criminals.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Criminal.name, schema: CriminalSchema },
    ]),
    forwardRef(() => AuthModule),
  ],
  controllers: [CriminalsController],
  providers: [CriminalsService, CriminalsRepository],
  exports: [CriminalsService, CriminalsRepository],
})
export class CriminalsModule {}
