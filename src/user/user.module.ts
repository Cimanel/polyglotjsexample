import { Module } from '@nestjs/common';
import { HandlebarsHelpersModule } from 'src/handlebars-helpers/handlebars-helpers.module';
import { PolyglotModule } from 'src/polyglot/polyglot.module';
import { UserController } from './user.controller';

@Module({
  imports: [PolyglotModule, HandlebarsHelpersModule],
  controllers: [UserController],
})
export class UserModule {}
