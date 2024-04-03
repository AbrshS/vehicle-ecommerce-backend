import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class User {
    @ApiProperty({
        description: 'first name',
        default: 'Belay',
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @ApiProperty({
        description: 'last name',
        default: 'Birhanu',
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @ApiProperty({
        description: 'Email should be valid, for notification',
        default: 'example@gmail.com',
        type: String,
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;


    @ApiProperty({
        description: 'password',
        default: '12ab',
        minLength: 4,
        maxLength: 20,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    password: string;
}
