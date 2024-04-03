import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {

  @ApiTags('')
  @Get()
  getHello() {
    return {
      title: 'Nobel E-Commerce RESTful API',
      logo: '',
      docs: 'http://localhost:3001/docs'
    };
  }
}
