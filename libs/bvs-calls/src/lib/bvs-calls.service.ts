import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { CreateBvscallsDto } from './dto';
import { Bvscalls } from './entities/bvscalls.entity';

@Injectable()
export class BvsCallsService {
  constructor(
    @InjectRepository(Bvscalls) private callsRepo: Repository<Bvscalls>,
  ) {}

  async getAllCalls() {
    const allUsers = await this.callsRepo.find();
    return allUsers;
  }

  async getAllCallsByYear() {
    return await 'All cals';
  }

  async saveCalls(createBvscallsDto: CreateBvscallsDto) {
    return await this.callsRepo.save(createBvscallsDto);
  }

}
