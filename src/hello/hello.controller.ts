import { Controller, Get, Render } from '@nestjs/common';

@Controller('/')
export class HelloController {
  @Get('/hello')
  @Render('hello')
  async get() {
    // try {
    //   return 'Hello world!';
    // } catch (error) {
    //   Logger.error(error);
    //   throw error;
    // }
  }
}
