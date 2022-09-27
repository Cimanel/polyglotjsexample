import { Module } from '@nestjs/common';
import { PolyglotModule } from '../polyglot/polyglot.module';
import { HandlebarsHelpersService } from './handlebars-helpers.service';

@Module({
  imports: [PolyglotModule],
  providers: [HandlebarsHelpersService],
  exports: [HandlebarsHelpersService],
})
export class HandlebarsHelpersModule {}
