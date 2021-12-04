import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './controllers';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
