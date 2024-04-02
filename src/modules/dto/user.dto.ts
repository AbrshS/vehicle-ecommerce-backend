import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsIn, IsNotEmpty, IsString, Length, MaxLength, MinLength } from 'class-validator';

export class User {
    @ApiProperty({
        description: 'first name',
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @ApiProperty({
        description: 'last name',
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    lastName: string;


    @ApiProperty({
        description: 'email',
        type: String,
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: `phone number`,
        type: String,
    })
    @Length(9)
    phone: string;

    @ApiProperty({
        description: `role`,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    role: string;
}
