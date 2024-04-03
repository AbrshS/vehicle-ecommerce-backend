import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '../dto';

@Injectable()
export class UserService {
    constructor(private readonly database: PrismaService) { }

    async findAllCustomers(): Promise<Object> {
        return await this.database.user.findMany({
            where: { role: 'CUSTOMER' },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                phone: true,
                email: true,
                role: true,
                avatarPath: true,
                createdAt: true,
                updatedAt: true,
                Order: true,
                Payment: true
            }
        })
    }

    async findAllAdmins(): Promise<Object> {
        return await this.database.user.findMany({
            where: { role: 'ADMIN' },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                phone: true,
                email: true,
                role: true,
                avatarPath: true,
                createdAt: true,
                updatedAt: true,
                Order: true,
                Payment: true
            }
        })
    }

    async findById(id: string): Promise<Object> {
        const user = await this.database.user.findUnique({
            where: { id },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                phone: true,
                email: true,
                role: true,
                avatarPath: true,
                createdAt: true,
                updatedAt: true,
                Order: true,
                Payment: true
            }
        })
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async updateById(id: string, @Body() userDto: User): Promise<Object> {
        const user = await this.database.user.findUnique({
            where: { id },
        })
        if (!user) {
            throw new NotFoundException('User not found');
        }

        const updatedUser = await this.database.user.update({
            where: { id },
            data: {
                firstName: userDto.firstName,
                lastName: userDto.lastName,
                phone: userDto.phone,
                email: userDto.email
            }
        })

        return updatedUser;
    }

    async deleteById(id: string) {
        const user = await this.database.user.findUnique({
            where: { id },
        })
        if (!user) {
            throw new NotFoundException('User not found');
        }

        await this.database.user.delete({ where: { id } })

        return { message: "user deleted successfully." }
    }
}
