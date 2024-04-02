import { Logger, Injectable, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeederService implements OnModuleInit {
    constructor(
        private database: PrismaService,
    ) { }

    async onModuleInit() {

        const logger = new Logger()

        try {

            const user = await this.database.user.findMany();

            // if no data inside the database?
            if (user.length == 0) {

                const password = '1234';
                const hash = await bcrypt.hash(password, 10);

                await this.database.user.create({
                    data: {
                        firstName: 'Abebe',
                        lastName: 'Kebede',
                        phone: '+251934905008',
                        email: 'adgehbirhane@gmail.com',
                        password: hash,
                        role: 'ADMIN',
                    }
                })
                logger.log('Admin seeding complete ...')
                logger.log('******************************************************************')
                logger.log('********           email:   adgehbirhane@gmail.com        ********')
                logger.log('********        password:   1234                          ********')
                logger.log('******************************************************************')
            } else {
                // logger.log('Already seeded...');
            }
        } catch (error) {
            logger.error('seeding error: ', error);
        } finally {
            await this.database.$disconnect();
        }
    }
}