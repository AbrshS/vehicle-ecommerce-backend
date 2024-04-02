import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ForgotPasswordEmail {
  @ApiProperty({
    description: 'Email should be valid email.',
    default: 'example@gmail.com',
    type: String,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
