import { IsInt, IsNotEmpty, IsString , IsOptional, min, Min, IsEmail, isString, MinLength, Max, maxLength, MaxLength} from "class-validator"
import { Transform, Type } from "class-transformer"

export class stdDto{

    @IsString()
    'name':string

    @IsInt()
    @Min(0)
    @Max(10)
    @MaxLength(10)
    @IsNotEmpty({message :"age is required"})
    "phone":number


   @IsNotEmpty({message:"age is required"})
    @IsInt()
    @Min(0)
    "age":number
    

    @IsEmail({},{message:"please enter a valid email"})
    "email":string
    
    @IsString({ message : "major is required" , groups :["create , update"] , always: true }) //put like update or create like post 
    "major":string
    
    @MinLength(6)
    "password":string

}
