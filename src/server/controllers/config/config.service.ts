import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: { JWT_SECRET: string };

  constructor() {
    this.envConfig = dotenv.parse(fs.readFileSync(`.env`));
  }

  get jwtSecret(): string {
    return this.envConfig.JWT_SECRET;
  }
}
