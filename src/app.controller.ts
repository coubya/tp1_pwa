import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service'; 
import { HelloMessage } from './HelloMessage'; 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello/:name')
  getHello(@Param('name') name: string): HelloMessage {
    return { hello: `Hello, ${name}!` }; 
  }
}
