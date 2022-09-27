import { Injectable, Scope } from '@nestjs/common';
import Polyglot from 'node-polyglot';
import messages, { Message } from 'src/i18n';

@Injectable({ scope: Scope.REQUEST })
export class PolyglotService {
  messages: { [key: string]: Message };
  polyglot: Polyglot;
  defaultLocale = 'en';
  constructor() {
    this.messages = messages;
    this.polyglot = new Polyglot({
      locale: this.defaultLocale,
      phrases: { '': '', ...this.messages[this.defaultLocale] },
    });
  }
  public setPolyglot = (locale: string) => {
    if (this.polyglot.locale() !== locale) {
      this.polyglot = new Polyglot({
        locale,
        phrases: {
          '': '',
          ...this.messages[this.messages[locale] ? locale : this.defaultLocale],
        },
      });
    }
  };

  public getPolyglot = () => {
    return this.polyglot;
  };
}
