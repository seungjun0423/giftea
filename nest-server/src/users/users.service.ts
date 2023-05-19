import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { User } from '@prisma';

@Injectable()
export class UsersService {
	// 프리스마 의존성 주입
	constructor(private prismaService: PrismaService){}

	/** 전체 사용자 조회 */
	async findAllUsers(): Promise<User[]> {
		return this.prismaService.user.findMany();
	}

	/** 단일 사용자 조회 */
	async findUser(id: number): Promise<User | null> {
		return this.prismaService
			.user.findUnique({ where: {id: Number(id)} });
	}

	/** 단일 사용자 데이터 삭제 */
	async deleteUser(id:number): Promise<User | null> {
		return this.prismaService
		.user.delete({ where: {id: Number(id)} });
	}
}
