import { Test, TestingModule } from '@nestjs/testing';
import { NutricionistaService } from './nutricionista.service';

describe('NutricionistaService', () => {
  let service: NutricionistaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutricionistaService],
    }).compile();

    service = module.get<NutricionistaService>(NutricionistaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
