import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length, MaxLength, MinLength } from 'class-validator';

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
        description: 'phone number',
        default: '934905008',
        minLength: 9,
        maxLength: 9,
    })
    @IsString()
    @IsNotEmpty()
    @Length(9)
    phone: string;

}
