import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { UsersService } from '../../serviecs/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getuser() {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser();
  }
}
