import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { BvsCallsController } from './bvs-calls.controller';
import { BvsCallsService } from './bvs-calls.service';
import { Bvscalls } from './entities/bvscalls.entity';
import { Ronewacalls } from './entities/ronewa.entity';
import { RonewaCalls } from './entities/ronewacalls.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Bvscalls,Ronewacalls,RonewaCalls]),
  ],
  controllers: [BvsCallsController],
  providers: [BvsCallsService],
  exports: [BvsCallsModule, BvsCallsService],
})
export class BvsCallsModule {}
