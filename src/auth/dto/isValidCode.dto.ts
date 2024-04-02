import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class IsValidCode {
  @ApiProperty({
    description: 'email should be valid email.',
    type: String,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'verification code',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  @Length(4, 4)
  code: string;
}
