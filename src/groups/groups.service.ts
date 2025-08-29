import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
  ) {}

  async findAll(): Promise<Group[]> {
    return this.groupsRepository.find();
  }

  async findOne(id: number): Promise<Group | null> {
    return this.groupsRepository.findOne({ where: { id } });
  }

  async create(name: string, color: string): Promise<Group> {
    const group = this.groupsRepository.create({ name, color });
    return this.groupsRepository.save(group);
  }

  async update(
    id: number,
    name?: string,
    color?: string,
  ): Promise<Group | null> {
    await this.groupsRepository.update(id, { name, color });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.groupsRepository.delete(id);
  }
}
