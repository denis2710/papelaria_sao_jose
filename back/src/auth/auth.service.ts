import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import { JwtPayload } from './jwt-payload';


@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
    ) {}

    async signUp(createUserDto: CreateUserDto):  Promise<{accessToken: string}> {
        await this.userRepository.signUp(createUserDto);

        const { username } = createUserDto;
        const isAdmin = false;
        const payload: JwtPayload = { username, isAdmin };
        const accessToken = await this.jwtService.sign(payload);
        
        return { accessToken };

    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
        const user: User = await this.userRepository.validateUserPassword(authCredentialsDto);

        if (!user) {
            throw new UnauthorizedException('Usuario ou senha inválidos');
        }

        const { username, isAdmin } = user;
        const payload: JwtPayload = { username, isAdmin };
        const accessToken = await this.jwtService.sign(payload);

        return { accessToken };
    }

}
