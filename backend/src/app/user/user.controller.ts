import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from './dtos/user.create.dto';
import { UserService } from './user.service';
import * as bcrypt from 'bcryptjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userCreateUserDto: UserCreateDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userCreateUserDto.password, salt);
    const userDtoWithHashedPassword = {
      ...userCreateUserDto,
      password: hashedPassword,
    };
    return await this.userService.createUser(userDtoWithHashedPassword);
  }
}
