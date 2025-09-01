import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    // Habilitar CORS para permitir acesso do frontend
    app.enableCors({
      origin: true, // Permite todas as origens temporariamente
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type, Authorization',
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
