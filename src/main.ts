import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir acesso do frontend
  app.enableCors({
    origin: [
      'https://to-do-list-8oqr7uk16-dylanbueno22s-projects.vercel.app', // NOVO FRONTEND
      'https://to-do-list-two-beta-66.vercel.app', // FRONTEND ANTIGO
      'https://to-do-list-two-beta-66.vercel.app', // FRONTEND QUE ESTÁ TENTANDO ACESSAR
      'http://localhost:5173', // DESENVOLVIMENTO
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
