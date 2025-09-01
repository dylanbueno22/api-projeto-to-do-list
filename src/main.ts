import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir acesso do frontend
  app.enableCors({
    origin:
      'https://api-projeto-to-do-list-37p1z0ui0-dylanbueno22s-projects.vercel.app', // Base URL do seu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
