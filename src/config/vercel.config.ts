import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const vercelConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: '/tmp/todo.db', // Vercel usa sistema de arquivos temporário
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // Vercel recria o banco a cada deploy
};
