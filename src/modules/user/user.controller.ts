import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../../auth/decorator';
import { RoleGuard } from '../../auth/guard';
import { UserService } from './user.service';
import { User } from '../dto';

@Controller('user')
@ApiTags('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    // @Post('/')
    // @Roles('ADMIN')
    // @UseGuards(RoleGuard)
    // createOne(@Body() user: User): Promise<Object> {
    //     return this.userService.createOne(user);
    // }
}
