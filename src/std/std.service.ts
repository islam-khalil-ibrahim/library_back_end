import { Get, Injectable } from '@nestjs/common';
import { stdDto } from './std.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Std } from './std.entits';
import type { Repository } from 'typeorm/browser';

@Injectable()
export class StdService {

     private stds=[
    {id:1, name:"islam" , age:24, email:"islam@example.com", phone:"1234567890",  password:"password123"},
    {id:2, name:"ahmed" , age:30, email:"ahmed@example.com", phone:"9087654321",  password:"password456"},
    {id:3, name:"mohamed", age:28, email:"mohamed@example.com", phone:"1122334455",  password:"password789"}
 ]


constructor(
@InjectRepository(Std)
private readonly stdRepository: Repository<Std>
){}


async AllStds(){
   return await this.stdRepository.find();
}


addStd(body:any){
    const newStd = this.stdRepository.create({
        id:body.id,
        name:body.name,
        email:body.email,
        phone:body.phone,
        age:body.age,
        password:body.password
        });
    return  this.stdRepository.save(newStd);
}




findStdById(id:number){
 return this.stds.filter(std => std.id === id)
}

patchStd(id:number , std:stdDto){
    this.stds[id-1]= std
    return this.stds
}
deleteStd(id:number){
    const index = this.stds.findIndex(std => std.id === id)
    if(index !== -1){
        this.stds.splice(index, 1)
    return this.stds; 
    }
    else return "student not found"
}

}
