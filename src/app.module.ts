import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { MySwaggerModule } from './my_swagger/my_swagger.module';
import { EmailModule } from './email/email.module';
import { ModulesModule } from './modules/modules.module';
import { SeederModule } from './seeder/seeder.module';
import { MyConfigModule } from './config/config.module';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [AuthModule, PrismaModule, MySwaggerModule, EmailModule, ModulesModule, SeederModule, MyConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
