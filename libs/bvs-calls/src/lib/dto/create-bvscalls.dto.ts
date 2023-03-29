import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBvscallsDto {
  @IsString()
  @IsNotEmpty()
  CallFrom: string | undefined

  @IsString()
  CallTo: string | undefined

  @IsString()
  @IsNotEmpty()
  CallTime: string | undefined

  @IsString()
  @IsNotEmpty()
  Duration: string | undefined

  @IsString()
  @IsNotEmpty()
  Billing: string | undefined

  @IsNumber()
  @IsNotEmpty()
  Cost: number | undefined

  @IsString()
  @IsNotEmpty()
  Status: string | undefined
}
