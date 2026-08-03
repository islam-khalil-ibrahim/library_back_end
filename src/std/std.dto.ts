import { IsInt, IsNotEmpty, IsString , Min, IsEmail, MinLength, Length} from "class-validator"
import { Transform, Type } from "class-transformer"

export class stdDto{

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
    
    @IsString({ message : "major is required" , groups :["create" ] , always: true   }) //put like update or create like post 
    "major":string
    
    @IsString({groups:["create", "update"] })
    @MinLength(6)
    "password": string;
}
