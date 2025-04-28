import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    describe('SignIn', () => {
      it.todo('Should SignIn.');
    });
    describe('SignUp', () => {
      it.todo('Should SignUp.');
    });
  });
  describe('User', () => {
    describe('Get Me', () => {});
    describe('Edit User', () => {});
  });
  describe('Bookmarks', () => {
    describe('Create Bookmark', () => {});
    describe('Get Bookmarks', () => {});
    describe('Get Bookmarks By Id', () => {});
    describe('Edit Bookmark', () => {});
    describe('Delete Bookmark', () => {});
  });
});
