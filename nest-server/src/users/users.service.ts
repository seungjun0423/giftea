import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { User } from '@prisma';

@Injectable()
export class UsersService {
	// 프리스마 의존성 주입
	constructor(private prismaService: PrismaService){}

	/**전체 사용자 조회 */
	async findAllUsers(): Promise<User[]> {
		return this.prismaService.user.findMany();
	}
}
