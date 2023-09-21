import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dtos/user.create.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async createUser(userDto: UserCreateDto): Promise<User> {
    const user = await this.userRepository.save(userDto);
    console.log('user', user);
    return user;
  }
}
