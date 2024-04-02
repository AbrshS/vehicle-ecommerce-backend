import { Module } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestApplication } from '@nestjs/core';

@Module({})
export class MySwaggerModule {
    static setup(app: NestApplication) {
        const config = new DocumentBuilder()
            .setTitle('Nobel E-Commerce RESTful API Docs')
            .setDescription('This docs has all APIs for our simple E-Commerce website called Nobel E-Commerce.')
            .setVersion('0.0.1')
            .addBearerAuth()
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('docs', app, document);
    }
}
