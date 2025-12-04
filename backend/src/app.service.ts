import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; timestamp: string } {
    return {
      message: 'Welcome to Bun + NestJS API',
      timestamp: new Date().toISOString(),
    };
  }

  getInfo(): { name: string; version: string; description: string } {
    return {
      name: 'bun-nest-backend',
      version: '1.0.0',
      description: 'Bun + NestJS Backend with Postgres and Redis',
    };
  }
}
