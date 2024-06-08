import { Controller, Get, Param, Query, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { UppercasePipe } from 'src/pipes/uppercase/uppercase.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new UppercasePipe())
  @Get()
  getUsers(@Query('name') name: string) {
    return name;
  }
}
