// auth.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private config: ConfigService) { }
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(' ')[1];
        const secret = this.config.get('JWT_SECRET');

        if (token) {
            try {
                const decoded = jwt.verify(token, secret);
                req.user = decoded;
            } catch (error) {
                // Handle invalid token
                console.error('Invalid token:', error.message);
            }
        }

        next();
    }
}
