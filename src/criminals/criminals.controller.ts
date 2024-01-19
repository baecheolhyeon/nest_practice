import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  Body,
  UseGuards,
} from '@nestjs/common';
import { CriminalsService } from './criminals.service';
import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/logging.interceptor';
import { CriminalsRequestDto } from './dtos/criminals.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReadonlyCriminalDto } from './dtos/criminals.response.dto';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/login.dto.ts/login.request.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Controller('criminals')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CriminalsController {
  constructor(
    private readonly criminalsService: CriminalsService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '현재 cri 정보 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentCriminals(@CurrentUser() criminal) {
    return criminal.readOnlyData;
  }

  @ApiOperation({ summary: '회원가입' })
  @ApiResponse({
    status: 500,
    description: 'Sever Error...',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: ReadonlyCriminalDto,
  })
  @Post()
  async singUp(@Body() body: CriminalsRequestDto) {
    console.log(body);
    return await this.criminalsService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Body() body: LoginRequestDto) {
    return this.authService.jwtLogin(body);
  }

  @ApiOperation({ summary: '사진 업로드' })
  @Post('upload')
  upLoding() {
    return 'uploading';
  }
}
