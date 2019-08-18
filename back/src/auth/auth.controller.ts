import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ){}

    @Post('/signup')
    @UsePipes(ValidationPipe)
    signUp(@Body() createUserDto: CreateUserDto): Promise<void> {
        return this.authService.signUp(createUserDto);
    }

    @Post('/signin')
    @UsePipes(ValidationPipe)
    signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}>  {
        return this.authService.signIn(authCredentialsDto);
    }

}
