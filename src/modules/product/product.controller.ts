import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../../auth/guard'
import { Roles } from '../../auth/decorator';

@Controller('product')
export class ProductController {
    @Get('/findAll')
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    findAll(): string {
        return 'This action returns all products';
    }
}
