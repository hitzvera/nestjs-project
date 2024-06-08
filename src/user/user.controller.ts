import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Query,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UppercasePipe } from 'src/pipes/uppercase/uppercase.pipe';
import { UUID } from 'crypto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new UppercasePipe())
  @Get()
  getUsers(@Query('name') name: string) {
    return name;
  }

  @Get(':id')
  getUserById(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.userService.getUserById(id);
  }
}
