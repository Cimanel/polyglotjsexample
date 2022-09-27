import { Test, TestingModule } from '@nestjs/testing';
import { PolyglotService } from './polyglot.service';

describe('PolyglotService', () => {
  let service: PolyglotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolyglotService],
    }).compile();

    service = module.get<PolyglotService>(PolyglotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
