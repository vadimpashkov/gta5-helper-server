import { Controller, UseGuards, Get, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth';
import { User } from '../../common';
import { UsersService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly fishService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('settings')
  getSettings(@User() user: { userId: number }) {
    return this.fishService.getSettings(user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('settings')
  setFish(@User() user: { userId: number }, @Body() body: any) {
    return this.fishService.setSettings(user.userId, body);
  }
}
