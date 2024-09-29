import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),AuthModule, UserModule, MenuModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
