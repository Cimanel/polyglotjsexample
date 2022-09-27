import { Injectable } from '@nestjs/common';
import { HelperOptions } from 'handlebars';
import { handlebars } from 'hbs';
import { PolyglotService } from '../polyglot/polyglot.service';

@Injectable()
export class HandlebarsHelpersService {
  constructor(private readonly polyglotService: PolyglotService) {
    handlebars.registerHelper(
      'translate',
      (phrase: string, options: HelperOptions) => {
        return this.polyglotService.getPolyglot().t(phrase, options.hash);
      },
    );
  }
}
