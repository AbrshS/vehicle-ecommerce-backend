import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { RoleGuard } from '../../auth/guard'
import { Roles } from '../../auth/decorator';
import { Role } from '../../auth/enum';

@ApiTags('product')
@Controller('product')
export class ProductController {
    @Get('/findAll')
    @ApiBearerAuth()
    @UseGuards(RoleGuard)
    @Roles(Role.Admin)
    findAll(): string {
        return 'This action returns all products';
    }
}
