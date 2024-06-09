import { Injectable } from '@nestjs/common';
import { LogExecutionTime } from 'src/commons/decorators/execution-time/execution-time.decorator';

@Injectable()
export class UserService {
  getUser() {
    return 'user';
  }

  @LogExecutionTime()
  getUserById(id: string) {
    return `user ${id}`;
  }
}
