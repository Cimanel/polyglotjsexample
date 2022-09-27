import { Module } from '@nestjs/common';
import { HandlebarsHelpersModule } from './handlebars-helpers/handlebars-helpers.module';
import { PolyglotModule } from './polyglot/polyglot.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, PolyglotModule, HandlebarsHelpersModule],
})
export class MainModule {}
