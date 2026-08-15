import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthDto {

  @IsString()
  "id": string;

  @IsNotEmpty()
  "pass": string;

}