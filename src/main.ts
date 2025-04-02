import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Cadastro de profissionais da Saúde')
  .setDescription('Para profissionais da saúde!')
  .setVersion('1.0')
  .addTag('seila')
  .build()
  const api = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useGlobalPipes(new ValidationPipe)
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,document)
  await app.listen(process.env.APP_URL);
}
bootstrap();
