import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma';

@Injectable()
export class UsersService {
	constructor(private PrismaService: PrismaService){}

	// 전체 사용자 조회
	async findAllUsers(): Promise<User[]> {
		return this.PrismaService.user.findMany();
	}
}
