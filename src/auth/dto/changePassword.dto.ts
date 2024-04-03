import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, MinLength, IsEmail } from 'class-validator';

export class ChangePassword {

  @ApiProperty({
    description: 'Email should be valid email.',
    default: 'example@gmail.com',
    type: String,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Current password',
    default: '1234',
    minLength: 4,
    maxLength: 20,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  currentPassword: string;

  @ApiProperty({
    description: 'new password',
    default: '1234',
    minLength: 4,
    maxLength: 20,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  newPassword: string;
}
