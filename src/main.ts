import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir acesso do frontend
  app.enableCors({
    origin: [
      'http://localhost:5173', // Frontend local
      'http://localhost:3000', // Backend local
      'https://to-do-list-inky-kappa.vercel.app', // Seu frontend no Vercel
      'https://your-frontend-domain.netlify.app', // Substitua pelo seu domínio
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
