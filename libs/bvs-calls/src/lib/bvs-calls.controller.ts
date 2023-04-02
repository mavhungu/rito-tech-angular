import { Body, Controller, Get, Post, Param } from '@nestjs/common';
//import { Request } from 'express';
import { BvsCallsService } from './bvs-calls.service';
import { CreateBvscallsDto } from './dto';

@Controller('bvs-calls')
export class BvsCallsController {
  year = 2018;
  constructor(private bvsCallsService: BvsCallsService) {}

  @Get()
  getAllCalls(){
    return this.bvsCallsService.getAllCalls();
  }

  @Get('call-by-year')
  getAllCallsByYear() {
    const years = this.year;
    return this.bvsCallsService.getAllCallsByYears(years);
  }

  @Get('call-per-month/:id')
  getgetAllCallsPerMonth(
    @Param('id') id: string
  ) {
    console.log(id);
    return this.bvsCallsService.getAllCallsPerMonth(id);
  }

  @Get('extension/:id&date')
  getExtensionCallSummary(
    @Param('id') id: string,
    @Param('date') date: string
  ) {
    return this.bvsCallsService.getExtensionCallSummary(id, date);
  }

  @Post('post/calls')
  saveCalls(@Body() createBvscallsDto:CreateBvscallsDto) {
    this.bvsCallsService.saveCalls(createBvscallsDto);
  }
}
