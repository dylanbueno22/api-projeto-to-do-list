import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    // Habilitar CORS para permitir acesso do frontend
    app.enableCors({
      origin: [
        'http://localhost:5173',
        'https://to-do-list-ccly9i1a2-dylanbueno22s-projects.vercel.app',
        'https://to-do-list-nzepzy0gb-dylanbueno22s-projects.vercel.app',
        'https://to-do-list-8oqr7uk16-dylanbueno22s-projects.vercel.app',
        'https://to-do-list-m3jj96kgo-dylanbueno22s-projects.vercel.app',
      ],
      credentials: true,
    });

    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    console.log(`🚀 API rodando na porta ${port}`);
  } catch (error) {
    console.error('❌ Erro ao iniciar a API:', error);
    process.exit(1);
  }
}
bootstrap();
