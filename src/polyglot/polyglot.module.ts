import { Module } from '@nestjs/common';
import { PolyglotService } from './polyglot.service';

@Module({
  providers: [PolyglotService],
  exports: [PolyglotService],
})
export class PolyglotModule {}
