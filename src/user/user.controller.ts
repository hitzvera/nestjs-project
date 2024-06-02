import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
  getUsers() {
    return {
      statusCode: 200,
      data: [],
    };
  }
}
