import { IsNotEmpty, IsString, MinLength, Matches, MaxLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({message: 'O nome de usuario não pode estar vazio.'})
    // @MinLength(4, {message: 'O nome de usuário deve conter no minimo 3 caracteres'})
    @MaxLength(20, {message: 'O nome de usuário deve conter no maximo 20 caracteres'})
    username: string;

    @IsString()
    @IsNotEmpty({message: 'A senha não pode estar vazia.'})
    @MinLength(3, {message: 'A senha deve conter no minimo 3 caracteres'})
    @MaxLength(20, {message: 'A senha deve conter no maximo 20 caracteres'})
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'A senha é muito fraca'})
    password: string;

    @IsString()
    @IsNotEmpty({message: 'O primeiro nome não pode estar vazio.'})
    @MinLength(3, {message: 'O primeiro nome deve conter no minimo 3 caracteres'})
    @MaxLength(20, {message: 'O primeiro nome deve conter no maximo 20 caracteres'})
    firstname: string;

    @IsString()
    @IsNotEmpty({message: 'O sobrenome nome não pode estar vazio.'})
    @MinLength(3, {message: 'O sobrenome nome deve conter no minimo 3 caracteres'})
    @MaxLength(20, {message: 'O sobrenome nome deve conter no maximo 20 caracteres'})
    lastname: string;

    @IsNotEmpty({message: 'Deve ser informado se o usuario é administrador'})
    isadmin: boolean;
}
