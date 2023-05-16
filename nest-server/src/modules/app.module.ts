import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import config from 'src/config/config';

@Module({
  imports: [ 
		ConfigModule.forRoot({
			load:[config],
			isGlobal:true
		}) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
