import { Get, Injectable } from '@nestjs/common';
import { stdDto } from './std.dto';

@Injectable()
export class StdService {

 private stds=[
    {id:1, name:"islam" , age:24, email:"islam@example.com", phone:"1234567890", major:"Computer Science", password:"password123"},
    {id:2, name:"ahmed" , age:30, email:"ahmed@example.com", phone:"9087654321", major:"Mathematics", password:"password456"},
    {id:3, name:"mohamed", age:28, email:"mohamed@example.com", phone:"1122334455", major:"Physics", password:"password789"}
 ]


AllStds(){
    return this.stds
}

findStdById(id:number){
 return this.stds.filter(std => std.id === id)
}

addStd(std:stdDto){
    this.stds.push(std)
    return this.stds
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
