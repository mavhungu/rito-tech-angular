import { Body, Controller, Get, Post } from '@nestjs/common';
//import { Request } from 'express';
import { BvsCallsService } from './bvs-calls.service';
import { CreateBvscallsDto } from './dto';

@Controller('bvs-calls')
export class BvsCallsController {
  year = 2018;
  constructor(private bvsCallsService: BvsCallsService) {}

  @Get('/')
  async getAllCalls(){
    return await this.bvsCallsService.getAllCalls();
  }

  @Post()
  saveCalls(@Body() createBvscallsDto:CreateBvscallsDto) {
    this.bvsCallsService.saveCalls(createBvscallsDto);
  }
}
