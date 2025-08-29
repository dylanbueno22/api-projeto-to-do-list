import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Task | null> {
    return this.tasksService.findOne(id);
  }

  @Post()
  async create(
    @Body() body: { title: string; status?: string },
  ): Promise<Task> {
    return this.tasksService.create(body.title, body.status);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { title?: string; completed?: boolean; status?: string },
  ): Promise<Task | null> {
    return this.tasksService.update(
      id,
      body.title,
      body.completed,
      body.status,
    );
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.remove(id);
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: string },
  ): Promise<Task | null> {
    return this.tasksService.update(id, undefined, undefined, body.status);
  }
}
