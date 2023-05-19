import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import config from 'src/config/config';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { PrismaService } from './prisma/prisma.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [ 
		ConfigModule.forRoot({
			load:[config],
			isGlobal:true
		}), 
		UsersModule ],

  controllers: [AppController, UsersController],
	
  providers: [AppService, UsersService,PrismaService],
})
export class AppModule implements NestModule{
	configure(consumer: MiddlewareConsumer) {
		consumer
		.apply(LoggerMiddleware)
		.forRoutes('users')
	}
}
