import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const supabaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.SUPABASE_HOST || 'db.zyjdzpdtuyyerflizikq.supabase.co',
  port: parseInt(process.env.SUPABASE_PORT || '5432'),
  username: process.env.SUPABASE_USER || 'postgres',
  password: process.env.SUPABASE_PASSWORD || 'dylan@30331007',
  database: process.env.SUPABASE_DATABASE || 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production',
  ssl: {
    rejectUnauthorized: false,
  },
  logging: process.env.NODE_ENV === 'development',
  extra: {
    ssl: {
      rejectUnauthorized: false,
      sslmode: 'require',
    },
  },
};
