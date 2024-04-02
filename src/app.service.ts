import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Object {
    return {
      title: 'Nobel E-Commerce RESTful API',
      docs: 'http://localhost:3001/docs'
    };
  }
}
