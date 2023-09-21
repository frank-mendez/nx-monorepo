import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from './dtos/user.create.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userCreateUserDto: UserCreateDto) {
    return await this.userService.createUser(userCreateUserDto);
  }
}
