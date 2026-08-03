import { Module } from '@nestjs/common';
import { StdService } from './std.service';
import { StdController } from './std.controller';

@Module({
  controllers: [StdController],
  providers: [StdService],
})
export class StdModule {}
