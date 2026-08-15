import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { StdModule } from './std/std.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BooksModule, StdModule,
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: "1381622002",
      database: 'students_db',
      autoLoadEntities: true,
      synchronize: true,}),
      AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
