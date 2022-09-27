import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as Polyglot from 'node-polyglot';
import { join } from 'path';
import englishMessages from './i18n/englishMessages';
import { MainModule } from './main.module';
import { getCustomHandlebarsHelpers } from './utils/customHandelbarsHelpers';

getCustomHandlebarsHelpers();
export const polyglot = new Polyglot({
  phrases: { '': '', ...englishMessages },
});

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule, {
    logger: ['log', 'error', 'warn'],
  });

  app.useStaticAssets(join(__dirname, 'public'));
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
