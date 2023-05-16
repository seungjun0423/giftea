import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function main() {
	const port = process.env.NODE_SERVER_PORT;

  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
main();
