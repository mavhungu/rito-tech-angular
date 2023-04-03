import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class IdDateDto {
  
  @IsString()
  @IsNotEmpty()
  id: string | undefined;

  @IsString()
  @IsNotEmpty()
  date: string | undefined;
}