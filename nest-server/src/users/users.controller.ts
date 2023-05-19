import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsersDto } from './CreateUsersDto';
import { UsersService } from './users.service';
import { User } from '@prisma';

@Controller('api/v1/users')
export class UsersController {
	constructor(private usersService: UsersService){}
	
	@Get()
	async findAllUsers(): Promise<User[]> {
		return this.usersService.findAllUsers()
	}
}
