import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { GroupsModule } from './groups/groups.module';
import { databaseConfig } from './config/database.config';
import { vercelConfig } from './config/vercel.config';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(process.env.VERCEL ? vercelConfig : databaseConfig),
    TasksModule,
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
