import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DataSource } from "typeorm";
import { CreateBvscallsDto } from './dto';
import { Bvscalls } from './entities/bvscalls.entity';
//import { BvsCallsDataSource } from './data-source/app-data-source';

@Injectable()
export class BvsCallsService {
  constructor(
    @InjectRepository(Bvscalls) private callsRepo: Repository<Bvscalls>,
    private bvscalls: Bvscalls,
  ) {}

  async getAllCalls() {
    const allUsers = await this.callsRepo.find();
    return allUsers;
  }

  async getAllCallsByYears(year: number) {
    const data = await this.callsRepo.manager.query(`SELECT DATE_FORMAT(CallTime,'%Y-%m') month, COUNT(CallTo) AS No_Calls, SUM(Cost) AS Total_Cost FROM ${this.bvscalls} WHERE YEAR(CallTime) = ${year} GROUP BY month`);
    console.log(data);
    return data;
    /*const rawData = await DataSource.manager.query(`SELECT DATE_FORMAT(CallTime,'%Y-%m') month, COUNT(CallTo) AS No_Calls, SUM(Cost) AS Total_Cost FROM ${Bvscalls} WHERE YEAR(CallTime) = ${year} GROUP BY month`);
    console.log(rawData);*/
  }

  async saveCalls(createBvscallsDto: CreateBvscallsDto) {
    return await this.callsRepo.save(createBvscallsDto);
  }

}
