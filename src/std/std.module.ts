import { Module } from '@nestjs/common';
import { StdService } from './std.service';
import { StdController } from './std.controller';
import { AuthGuard } from './guards/auth.guard';
import { Std } from './std.entits';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Std])],
  controllers: [StdController],
  providers: [StdService, AuthGuard]
})
export class StdModule {}
