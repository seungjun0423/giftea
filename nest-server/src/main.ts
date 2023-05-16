import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ConfigService } from '@nestjs/config';

async function main() {
	
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);
	const port = configService.get('NODE_SERVER_PORT');

  await app.listen(port);
}
main();
