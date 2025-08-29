import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Group } from './group.entity';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get()
  async findAll(): Promise<Group[]> {
    return this.groupsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Group | null> {
    return this.groupsService.findOne(id);
  }

  @Post()
  async create(@Body() body: { name: string; color?: string }): Promise<Group> {
    const { name, color = '#3B82F6' } = body;
    return this.groupsService.create(name, color);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { name?: string; color?: string },
  ): Promise<Group | null> {
    return this.groupsService.update(id, body.name, body.color);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.groupsService.remove(id);
  }
}
