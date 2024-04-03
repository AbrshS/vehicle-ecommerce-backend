import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../../auth/decorator';
import { RoleGuard } from '../../auth/guard';
import { User } from '../dto';
import { Role } from '../../auth/enum';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get('/customers')
    @Roles(Role.Admin)
    @UseGuards(RoleGuard)
    findAllCustomers(): Promise<Object> {
        return this.userService.findAllCustomers();
    }

    @Get('/admins')
    @Roles(Role.Admin)
    @UseGuards(RoleGuard)
    findAllAdmins(): Promise<Object> {
        return this.userService.findAllAdmins();
    }

    @Get('/:id')
    @Roles(Role.Admin)
    @UseGuards(RoleGuard)
    findById(@Param() id: string): Promise<Object> {
        return this.userService.findById(id);
    }

    @Put("/:id")
    @Roles(Role.Customer)
    @UseGuards(RoleGuard)
    updateById(@Param('id') id: string, @Body() user: User): Promise<Object> {
        return this.userService.updateById(id, user);
    }

    @Delete("/:id")
    @Roles(Role.Admin)
    @UseGuards(RoleGuard)
    deleteById(@Param('id') id: string): Promise<Object> {
        return this.userService.deleteById(id);
    }
}
