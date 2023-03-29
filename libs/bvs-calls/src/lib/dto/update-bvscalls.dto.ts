import { PartialType } from '@nestjs/mapped-types';
import { CreateBvscallsDto } from "./create-bvscalls.dto";

export class UpdateBvscallsDto extends PartialType(CreateBvscallsDto) {}