import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Task | null> {
    return this.tasksRepository.findOne({ where: { id } });
  }

  async create(title: string, status: string = 'pending'): Promise<Task> {
    const task = this.tasksRepository.create({ title, status });
    return this.tasksRepository.save(task);
  }

  async update(
    id: number,
    title?: string,
    completed?: boolean,
    status?: string,
  ): Promise<Task | null> {
    await this.tasksRepository.update(id, { title, completed, status });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
