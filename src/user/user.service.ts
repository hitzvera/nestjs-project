import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return 'user';
  }

  getUserById(id: string) {
    return `user ${id}`;
  }
}
