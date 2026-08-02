import { Transform, Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class BookDto {
  @IsInt()
  @Type(() => Number)
  // @Transform(BookDto => Number(BookDto.value))
  @IsNotEmpty()
  'id': number;

  @IsOptional()
  @IsString()
  'title': string;

  @IsOptional()
  @IsString()
  'author': string;

  @IsOptional()
  @IsInt()
  'price': number;
}
