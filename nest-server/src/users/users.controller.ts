import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUsersDto } from './CreateUsersDto';
import { UsersService } from './users.service';
import { User } from '@prisma';

@Controller('api/v1/users')
export class UsersController {
	constructor(private usersService: UsersService){}

	@Get()
	async findAllUsers(): Promise<User[]> {
		return this.usersService.findAllUsers();
	}

	@Get(':id')
	async findUser(@Param('id') id: number): Promise<User | null> {
		return this.usersService.findUser(id);
	}

	@Delete(':id')
	async deleteUser(@Param('id') id: number): Promise<User | null> {
		return this.usersService.deleteUser(id);
	}
}
