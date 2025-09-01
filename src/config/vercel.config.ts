import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const vercelConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: '/tmp/todo.db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false, // Desabilita sincronização automática
  logging: false,
  dropSchema: false, // Não recria o banco a cada deploy
};
