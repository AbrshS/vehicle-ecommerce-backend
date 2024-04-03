import { Body, Controller, HttpCode, HttpStatus, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthDto, ChangePassword, ForgotPasswordEmail, IsValidCode, ResetPasswordDto } from './dto';
import { AuthService } from './auth.service';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '../modules/dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  @Post('getme')
  @HttpCode(HttpStatus.OK)
  getMe(@GetUser() user: User) {
    return user;
  }

  @Post('signup')
  async signUp(@Body() user: User): Promise<Object> {
    return this.authService.signUp(user);
  }

  @Post('signin')
  @HttpCode(HttpStatus.ACCEPTED)
  async signin(@Body() dto: AuthDto): Promise<Object> {
    return this.authService.signin(dto);
  }

  @Post('forgotPassword')
  @HttpCode(HttpStatus.ACCEPTED)
  async forgotPassword(@Body() dtoFPE: ForgotPasswordEmail): Promise<Object> {
    return this.authService.forgotPassword(dtoFPE);
  }

  @Post('isValidCode')
  @HttpCode(HttpStatus.ACCEPTED)
  async isValidVerificationCode(@Body() isVC: IsValidCode) {
    return this.authService.isValidVerificationCode(isVC);
  }

  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  @Patch('resetPassword')
  async resetPassword(@Body() dtoRP: ResetPasswordDto): Promise<Object> {
    return this.authService.resetPassword(dtoRP);
  }

  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  @Patch('changePassword')
  async changePassword(@Body() dtoCP: ChangePassword): Promise<Object> {
    return this.authService.changePassword(dtoCP);
  }
}
