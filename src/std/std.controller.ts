import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { StdService } from './std.service';
import { stdDto } from './std.dto';
import { StdPipePipe } from './std-pipe.pipe';

@Controller('std')
export class StdController {
  constructor(private readonly stdService: StdService) {}

  @Get("allStds")
    getAllStds(){
      return this.stdService.AllStds();
    }
  
@Get("stdById/:id")
getStdById(@Param("id") id: string){
  return this.stdService.findStdById(Number(id));}

@UsePipes(new ValidationPipe( {whitelist:true , groups:["create"]}) ) 
@Post("addStd")
addStd(@Body() std :stdDto){
 return this.stdService.addStd(std);
}

@UsePipes(new ValidationPipe( {whitelist:true , groups:["update"]}) ) 
@Patch("patchStd/:id")
patchStd(@Param("id") id:string ,@Body() std:stdDto){
  return this.stdService.patchStd(Number(id) ,std)
}

@Delete("deleteStd/:id")
deleteStd(@Param("id") id:string){
  return this.stdService.deleteStd(Number(id));
}

@Get("status/:status")
getStatuse(@Param("status", StdPipePipe) status: string) {
  return status;
}

@Get("student/:student")
getTheName(@Param("student", StdPipePipe) student: string) {
  return student;
}



}
