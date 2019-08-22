import { Controller, Post, Body, UsePipes, ValidationPipe, Get, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ){}

    @Get('/users')
    @UseGuards(AuthGuard())
    getUsers(): Promise<User[]> {
        return this.authService.getUsers()
    }

    @Post('/signup')
    @UsePipes(ValidationPipe)
    signUp(@Body() createUserDto: CreateUserDto): Promise<{accessToken: string}> {
        return this.authService.signUp(createUserDto);
    }

    @Post('/signin')
    @UsePipes(ValidationPipe)
    signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}>  {
        return this.authService.signIn(authCredentialsDto);
    }

}
