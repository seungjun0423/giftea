import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import config from 'src/config/config';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [ 
		ConfigModule.forRoot({
			load:[config],
			isGlobal:true
		}), UsersModule ],

  controllers: [AppController],
	
  providers: [AppService],
})
export class AppModule implements NestModule{
	configure(consumer: MiddlewareConsumer) {
		consumer
		.apply(LoggerMiddleware)
		.forRoutes('users')
	}
}
