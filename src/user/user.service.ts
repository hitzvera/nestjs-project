import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return 'user';
  }
}
