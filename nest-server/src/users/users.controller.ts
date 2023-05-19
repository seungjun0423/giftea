import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsersDto } from './CreateUsersDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService){}
	
}
