import { Module } from '@nestjs/common';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [],
  controllers: [HelloController],
})
export class MainModule {}