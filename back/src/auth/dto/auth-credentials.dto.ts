import { IsNotEmpty, IsString, MinLength, Matches, MaxLength } from 'class-validator';

export class AuthCredentialsDto {
    @IsString()
    username: string;

    @IsString()
    password: string;
}
