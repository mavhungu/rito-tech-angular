import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateBvscallsDto, IdDateDto } from './dto';
import { Bvscalls } from './entities/bvscalls.entity';


@Injectable()
export class BvsCallsService {

  constructor(
    @InjectRepository(Bvscalls) private callsRepo: Repository<Bvscalls>,
  ) {}

  async getAllCalls() {
    return await this.callsRepo.find();
    //return allUsers;
  }

  async getAllCallsByYears(year: number) {
    return await this.callsRepo.manager.query(`SELECT DATE_FORMAT(CallTime,'%Y-%m') month, COUNT(CallTo) AS No_Calls, SUM(Cost) AS Total_Cost FROM bvscalls WHERE YEAR(CallTime) = ${year} GROUP BY month`);
  }

  async getAllCallsPerMonth(id: string) {
    return await this.callsRepo.manager.query(`SELECT CallFrom, COUNT(CallTo) AS No_Calls, SUM(Cost) AS Total_Cost FROM bvscalls WHERE CallTime LIKE '${id}-%' GROUP BY CallFrom`);
  }

  async getExtensionCallSummary(idDateDto: IdDateDto) {
    const { id, date } = idDateDto;
    const dd = await this.callsRepo.manager.query(`SELECT CallFrom, CallTo, CallTime , Duration, Cost FROM bvscalls WHERE CallFrom LIKE '${id}-%' and CallTime LIKE '${date}-%'`);
    const tt = await this.callsRepo.manager.query("SELECT CallFrom, CallTo, CallTime , Duration, Cost FROM `bvscalls` WHERE CallFrom LIKE 'Annie (2071)' and CallTime LIKE '2018-07'");
    console.log(dd);
    console.log(tt);
    return dd;
  }

  async saveCalls(createBvscallsDto: CreateBvscallsDto) {
    return await this.callsRepo.save(createBvscallsDto);
  }

}
