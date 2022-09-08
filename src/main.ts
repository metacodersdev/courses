import { VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Configs } from './configs/Configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<Configs>);

  app.enableCors({
    origin: "*",
    methods: ["GET"]
  })
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ["v1", "v2"],
    prefix: ""
  });
  await app.listen(configService.get("port"));
}
bootstrap();
