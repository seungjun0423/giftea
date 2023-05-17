import { Controller, Get } from '@nestjs/common';
import { Users } from './interface/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService){}

	@Get()
	async findAll(): Promise<Users[]> {
		return this.usersService.findAll();
	}
}
