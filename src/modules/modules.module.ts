import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { JwtStrategy } from '../auth/strategy';


@Module({
    imports: [
        JwtModule.register({}),
        UserModule, CategoryModule, ProductModule, OrderModule
    ],
    providers: [JwtStrategy],
})
export class ModulesModule { }