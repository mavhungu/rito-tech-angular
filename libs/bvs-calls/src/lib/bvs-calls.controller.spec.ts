import { Test } from '@nestjs/testing';
import { BvsCallsController } from './bvs-calls.controller';
import { BvsCallsService } from './bvs-calls.service';

describe('BvsCallsController', () => {
  let controller: BvsCallsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BvsCallsService],
      controllers: [BvsCallsController],
    }).compile();

    controller = module.get(BvsCallsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
