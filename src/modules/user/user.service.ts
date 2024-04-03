import { Injectable } from '@nestjs/common';
import { User } from '../dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly database: PrismaService){}

    async createOne(user: User){
        // return await this.database.user.create({
        //     data: {user, password: '1234'},
        // })
    }
}
