import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from '../users';
import { AuthModule } from '../auth';
import { FishModule } from '../fish';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule, FishModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
