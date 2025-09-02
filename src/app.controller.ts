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

  @Get('test')
  getTest(): object {
    return {
      message: 'API funcionando!',
      timestamp: new Date().toISOString(),
      env: {
        SUPABASE_HOST: process.env.SUPABASE_HOST || 'não definido',
        SUPABASE_PORT: process.env.SUPABASE_PORT || 'não definido',
        SUPABASE_USER: process.env.SUPABASE_USER || 'não definido',
        SUPABASE_DATABASE: process.env.SUPABASE_DATABASE || 'não definido',
        SUPABASE_PASSWORD: process.env.SUPABASE_PASSWORD
          ? '***'
          : 'não definido',
      },
    };
  }
}
