import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({})
export class ModulesModule {
    imports: [UserModule, CategoryModule, ProductModule, OrderModule]
}
