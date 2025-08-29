import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const vercelConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: '/tmp/todo.db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: false,
  dropSchema: true, // Recria o banco a cada deploy
};
