import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir acesso do frontend
  app.enableCors({
    origin: [
      'https://to-do-list-two-beta-66.vercel.app', // Seu frontend atual
      'https://to-do-list-nzepzy0gb-dylanbueno22s-projects.vercel.app', // Outro frontend
      'http://localhost:5173', // Para desenvolvimento local
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
