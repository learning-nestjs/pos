import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthModule } from './auth/auth.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('POS')
    .setDescription('The Authentication API description')
    .setVersion('1.0')
    .addTag('POS')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [
      AuthModule
    ]
  });
  SwaggerModule.setup('api', app, document);


  await app.listen(8080);
}
bootstrap();
