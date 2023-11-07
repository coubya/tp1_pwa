import { Injectable, Param } from '@nestjs/common';
import { HelloMessage } from './HelloMessage'; 

@Injectable()
export class AppService {

  getHello(@Param('name') name: string): HelloMessage {
    return { hello: `Hello, ${name}!` };
  }

}
