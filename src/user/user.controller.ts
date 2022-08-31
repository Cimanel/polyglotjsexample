import {
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Render,
} from '@nestjs/common';
import fetch from 'node-fetch';

@Controller('/user')
export class UserController {
  @Get('/:id')
  @Render('user')
  async get(@Param('id', ParseIntPipe) id: number) {
    try {
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
