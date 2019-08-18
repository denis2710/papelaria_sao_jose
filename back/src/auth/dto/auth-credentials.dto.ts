import { IsNotEmpty, IsString, MinLength, Matches, MaxLength } from 'class-validator';

export class AuthCredentialsDto {
    @IsString()
    @IsNotEmpty({message: 'O nome de usuario não pode estar vazio.'})
    @MinLength(4, {message: 'O nome de usuário deve conter no minimo 4 caracteres'})
    @MaxLength(20, {message: 'O nome de usuário deve conter no maximo 20 caracteres'})
    username: string;

    @IsString()
    @IsNotEmpty({message: 'A senha não pode estar vazia.'})
    @MinLength(8, {message: 'A senha deve conter no minimo 8 caracteres'})
    @MaxLength(20, {message: 'A senha deve conter no maximo 20 caracteres'})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'A senha é muito fraca'})
    password: string;
}
