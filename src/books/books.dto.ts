import { Transform, Type } from "class-transformer"
import { IsInt, IsNotEmpty, IsString } from "class-validator"

export class BookDto {
    @IsInt()
    @Type(() => Number)
    // @Transform(BookDto => Number(BookDto.value))
    @IsNotEmpty()
    'id':number
    @IsString()
    'title':string
   @IsString()
    'author':string

    @IsNotEmpty()
    @IsInt()
    'price':number

    
}