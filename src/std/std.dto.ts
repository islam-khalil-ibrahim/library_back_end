import { IsInt, IsNotEmpty, IsString , Min, IsEmail, MinLength, Length} from "class-validator"
import { Transform, Type } from "class-transformer"

export class stdDto{
    // @IsString({message:" status is not string   "})
    // "student" : string

    // @IsString({message:" status is not string   "})
    // "status":string

    @IsInt({message:"ID must be a number", groups:["create", "update"] })
    "id":number
    
    @IsString({groups:["create", "update"] })
    'name':string

    @IsString({groups:["create"] })
    @Length(10,10 , {message:"phone must be 10 digits"})
    @IsNotEmpty({message :"phone is required"})
    "phone":string


    @IsNotEmpty({message:"age is required"})
    @IsInt({groups:["create"]})
    @Min(0)
    "age":number
    
    @IsString({groups:["create", "update"] })

    @IsEmail({},{message:"please enter a valid email"})
    "email":string
    
    
    @IsString({groups:["create", "update"] })
    @MinLength(6)
    "password": string;
}
