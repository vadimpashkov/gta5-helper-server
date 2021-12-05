import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoundFish, AvailableFish, User } from '../../entities';
import { FishController } from './fish.controller';
import { FishService } from './fish.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoundFish, AvailableFish, User])],
  controllers: [FishController],
  providers: [FishService],
})
export class FishModule {}
