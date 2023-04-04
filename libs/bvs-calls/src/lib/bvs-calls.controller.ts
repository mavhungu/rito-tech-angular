import { Body, Controller, Get, Post, Param } from '@nestjs/common';
//import { Request } from 'express';
import { BvsCallsService } from './bvs-calls.service';
import { CreateBvscallsDto, IdDateDto } from './dto';

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
    return this.bvsCallsService.getAllCallsPerMonth(id);
  }

  @Get('extension-records/:id')
  getExtensionRecords(@Param('id') idDateDto: IdDateDto) {
    console.log(idDateDto);
    return this.bvsCallsService.getExtensionRecords(idDateDto);
  }

  @Post('extension-calls')
  getExtensionCallSummary(@Body() idDateDto: IdDateDto ) {
    return this.bvsCallsService.getExtensionCallSummary(idDateDto);
  }

  @Post('post/calls')
  saveCalls(@Body() createBvscallsDto:CreateBvscallsDto) {
    this.bvsCallsService.saveCalls(createBvscallsDto);
  }
}
