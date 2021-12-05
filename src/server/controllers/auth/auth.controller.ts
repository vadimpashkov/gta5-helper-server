import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { User } from '../../common';
import { UserWithoutPass } from '../../../common/UserWithoutPass';

@Controller('api')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@User() user: UserWithoutPass) {
    return this.authService.login(user);
  }
}
