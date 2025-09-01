import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const postgresConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db.ehbbdhwdkwfdfjqhcrsf.supabase.co',
  port: 5432,
  username: 'postgres',
  password: process.env.SUPABASE_SERVICE_KEY || 'SUPABASE_SERVICE_KEY',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: false,
  ssl: { rejectUnauthorized: false },
};
