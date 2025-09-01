import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const vercelConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: '/tmp/todo.db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // Habilita sincronização para criar tabelas
  logging: true, // Habilita logs para debug
  dropSchema: false, // Não recria o banco a cada deploy
};
