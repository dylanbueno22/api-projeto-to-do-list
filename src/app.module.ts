import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { GroupsModule } from './groups/groups.module';
import { postgresConfig } from './config/postgres.config';
import { AppController } from './app.controller';

@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig), TasksModule, GroupsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
