import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUsersDto } from './CreateUsersDto';
import { UsersService } from './users.service';
import { User } from '@prisma';

@Controller('api/v1/users')
export class UsersController {
	constructor(private usersService: UsersService){}
	
	@Post()
	async addUser(@Body() data: User): Promise<User> {
		return this.usersService.addUser(data);
	}

	@Get()
	async findAllUsers(): Promise<User[]> {
		return this.usersService.findAllUsers();
	}

	@Get(':id')
	async findUser(@Param('id') id: number): Promise<User | null> {
		return this.usersService.findUser(id);
	}

	@Put(':id')
	async updateUser(@Param('id') id: number, @Body() data: User): Promise<User | null> {
		return this.usersService.updateUser(id, data.name, data.gender, data.age, data.phone, data.email);
	}

	@Delete(':id')
	async deleteUser(@Param('id') id: number): Promise<User | null> {
		return this.usersService.deleteUser(id);
	}
}
