import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing'
import { AppModule } from 'src/app.module';
import * as pactum from 'pactum'
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from 'src/auth/dto';
import { EditUserDto } from 'src/user/dto';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService
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

    await app.listen(3334);

    prisma = app.get(PrismaService)
    await prisma.cleanDb()
    pactum.request.setBaseUrl('http://localhost:3333')
  });
  afterAll(() => {
    app.close();
  })
  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'dauditeddy@gmail.com',
      password: '123'
    }
    describe('Signup', () => {
      it('should throw if email empty', () => {
        return pactum.spec().post('/auth/signup')
          .withBody({
            password: dto.password
          })
          .expectStatus(400)
      })
      it('should throw if password empty', () => {
        return pactum.spec().post('/auth/signup')
          .withBody({
            email: dto.email
          })
          .expectStatus(400)
      })
      it('should throw if no body provided', () => {
        return pactum.spec().post('/auth/signup')
          .expectStatus(400)
      })
      it('should signup', () => {
        return pactum.spec().post('/auth/signup')
          .withBody(dto)
          .expectStatus(201)
      })
    });
    describe('Signin', () => {
      let accessToken: string
      it('should throw if email empty', () => {
        return pactum.spec().post('/auth/signin')
          .withBody({
            password: dto.password
          })
          .expectStatus(400)
      })
      it('should throw if password empty', () => {
        return pactum.spec().post('/auth/signin')
          .withBody({
            email: dto.email
          })
          .expectStatus(400)
      })
      it('should throw if no body provided', () => {
        return pactum.spec().post('/auth/signin')
          .expectStatus(400)
      })
      it('should signin', () => {
        return pactum.spec().post('/auth/signin')
          .withBody(dto)
          .expectStatus(200)
          .stores('userAt', 'access_token')
      })
    });
  });

  describe('User', () => {
    describe('Get me', () => {
      it('should get current user', () => {
        return pactum.spec()
          .get('/users/me')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}'
          })
          .expectStatus(200)
      })
    });

    describe('Edit user', () => {
      it('should edit user', ()=>{
        const dto: EditUserDto = {
          firstName:"Ted",
          email: 'dauditeddy@test.com'
        }
        return pactum
        .spec()
        .patch('/users')
        .withHeaders({
          Authorization: 'Bearer $S{userAt}',
        })
        .withBody(dto)
        .expectStatus(200)
        .expectBodyContains(dto.firstName)
        .expectBodyContains(dto.email)
      })
    });
  });

  describe('Menus', () => {
    describe('Create menu', () => { });

    describe('Get menus', () => { });

    describe('Get menu by id', () => { });

    describe('Edit menu by id', () => { });

    describe('Delete menu by id', () => { });
  });
})