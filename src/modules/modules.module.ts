import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { JwtStrategy } from '../auth/strategy';
import { UserModule } from './user/user.module';


@Module({
    imports: [
        JwtModule.register({}),
        CategoryModule, ProductModule, OrderModule, UserModule
    ],
    providers: [JwtStrategy],
})
export class ModulesModule { }