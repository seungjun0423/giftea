import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsersDto } from './CreateUsersDto';
import { Users } from './interface/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService){}

	@Get()
	async findAll(): Promise<Users[]> {
		return this.usersService.findAll();
	}

	@Post()
	async create(@Body() createUsersDto: CreateUsersDto){
		this.usersService.create(createUsersDto);
	} 
}
