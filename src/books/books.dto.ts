import { IsInt, IsNotEmpty, IsString } from "class-validator"

export class BookDto {
    @IsInt()
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