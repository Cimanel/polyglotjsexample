import { handlebars } from 'hbs';
import { polyglot } from '../main';

export function getCustomHandlebarsHelpers() {
  handlebars.registerHelper('translate', function (key: string) {
    return polyglot.t(key);
  });
}
