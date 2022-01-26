import { Test, TestingModule } from '@nestjs/testing';
import { BuildingsResolver } from './buildings.resolver';
import { BuildingsService } from './buildings.service';

describe('BuildingsResolver', () => {
  let resolver: BuildingsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingsResolver, BuildingsService],
    }).compile();

    resolver = module.get<BuildingsResolver>(BuildingsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
