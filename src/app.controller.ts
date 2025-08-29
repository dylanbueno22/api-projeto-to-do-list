import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): object {
    return {
      message: 'Todo API Backend',
      version: '1.0.0',
      endpoints: {
        tasks: '/tasks',
        groups: '/groups',
        docs: 'Available endpoints for task and group management',
      },
    };
  }
}
