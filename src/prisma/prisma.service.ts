import { Injectable } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../../generated/prisma';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
  cleanDb() {
    // tranx executes in order.
    return this.$transaction([
      this.bookmark.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
}
