import { Test, TestingModule } from '@nestjs/testing';
import { HandlebarsHelpersService } from './handlebars-helpers.service';

describe('HandlebarsHelpersService', () => {
  let service: HandlebarsHelpersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HandlebarsHelpersService],
    }).compile();

    service = module.get<HandlebarsHelpersService>(HandlebarsHelpersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
