import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { FishService } from './fish.service';
import { JwtAuthGuard } from '../auth';
import { User } from '../../common';

@Controller('api/fish')
export class FishController {
  constructor(private readonly fishService: FishService) {}

  @UseGuards(JwtAuthGuard)
  @Post('add')
  addFish(@User() user: { userId: number }, @Body() body: { name: string }) {
    return this.fishService.addFish(user.userId, body.name);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getFish(@User() user: { userId: number }) {
    return this.fishService.getFish(user.userId);
  }
}
