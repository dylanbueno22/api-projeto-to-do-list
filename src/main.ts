import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    // Debug: Verificar variáveis de ambiente
    console.log('🔍 Debug - Variáveis de ambiente:');
    console.log('SUPABASE_HOST:', process.env.SUPABASE_HOST);
    console.log('SUPABASE_PORT:', process.env.SUPABASE_PORT);
    console.log('SUPABASE_USER:', process.env.SUPABASE_USER);
    console.log('SUPABASE_DATABASE:', process.env.SUPABASE_DATABASE);
    console.log(
      'SUPABASE_PASSWORD:',
      process.env.SUPABASE_PASSWORD ? '***' : 'undefined',
    );

    const app = await NestFactory.create(AppModule);

    // Habilitar CORS para permitir acesso do frontend
    app.enableCors({
      origin: true, // Permite todas as origens
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
// Exportar para Vercel
export default bootstrap;

// Iniciar localmente
if (require.main === module) {
  bootstrap();
}
