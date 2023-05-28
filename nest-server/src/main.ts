import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function main() {
	
	const app = await NestFactory.create(AppModule, {cors:true});
	const configService = app.get(ConfigService);
	const port = configService.get<string>('server.port');
	
	app.enableCors()

  await app.listen(port);
}
main();
