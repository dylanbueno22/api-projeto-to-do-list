import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { GroupsModule } from './groups/groups.module';
import { supabaseConfig } from './config/supabase.config';
import { AppController } from './app.controller';

@Module({
  imports: [TypeOrmModule.forRoot(supabaseConfig), TasksModule, GroupsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
