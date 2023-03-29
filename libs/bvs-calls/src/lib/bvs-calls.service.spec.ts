import { Test } from '@nestjs/testing';
import { BvsCallsService } from './bvs-calls.service';

describe('BvsCallsService', () => {
  let service: BvsCallsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BvsCallsService],
    }).compile();

    service = module.get(BvsCallsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
