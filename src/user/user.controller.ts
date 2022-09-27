import {
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Render,
} from '@nestjs/common';
import fetch from 'node-fetch';
import { HandlebarsHelpersService } from 'src/handlebars-helpers/handlebars-helpers.service';
import { PolyglotService } from 'src/polyglot/polyglot.service';

@Controller('/users')
export class UserController {
  constructor(
    private readonly polygloteService: PolyglotService,
    private readonly handelbarsHelpersService: HandlebarsHelpersService,
  ) {}
  @Get('/:locale/:id')
  @Render('user')
  async get(
    @Param('id', ParseIntPipe) id: number,
    @Param('locale') locale: string,
  ): Promise<any> {
    try {
      if (this.polygloteService.polyglot.locale() !== locale) {
        this.polygloteService.setPolyglot(locale);
      }
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const user = await response.json();
      return user;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
}
