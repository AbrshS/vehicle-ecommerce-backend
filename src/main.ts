import { Logger, ValidationPipe } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MySwaggerModule } from './my_swagger/my_swagger.module';

require('dotenv').config();

const portNumber = parseInt(process.env.PORT, 10) || 3001;
// docker will not accept NaN, -ve, and greater than 65535
if (isNaN(portNumber) || portNumber < 0 || portNumber > 65535) {
  console.error(`Invalid port number: ${portNumber}`);
  process.exit(1);
}

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);

  // validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // this will exclude data that is not defined on our model.
    }),
  );

  // cross-origin resource sharing allows resources to be requested from another domain.
  app.enableCors();

  // Setup Swagger
  MySwaggerModule.setup(app as NestApplication);

  await app.listen(portNumber);
}

bootstrap().then(() => {
  const logger = new Logger();
  logger.log(`The server is started at http://localhost:${portNumber}`);
  logger.log(`You are prompt to access the docs at http://localhost:${portNumber}/docs`);
});
