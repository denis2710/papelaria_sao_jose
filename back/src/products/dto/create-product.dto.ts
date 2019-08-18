import { IsNotEmpty, IsString, MinLength, MaxLength, IsNumber, Min } from 'class-validator';

export class CreateProductDto {

    @IsString()
    @IsNotEmpty({message: 'O nome do produto deve ser informado.'})
    @MinLength(3, { message: 'O tamanho minimo do nome de um produto é de 3 caracteres.' })
    @MaxLength(30, { message: 'O tamanho maximo do nome de um produto é de 30 caracteres.' })
    name: string;

    @IsString()
    @IsNotEmpty({message: 'A descrição do produto deve ser informada.'})
    @MinLength(3, { message: 'O tamanho minimo da descrição de um produto é de 3 caracteres.'})
    @MaxLength(300, { message: 'O tamanho maximo da descrição de um produto é de 300 caracteres.'})
    description: string;

    @IsString()
    @IsNotEmpty({message: 'A cor do produto deve ser informada.'})
    @MinLength(3, { message: 'O tamanho minimo de uma cor é de 3 caracteres.'})
    @MaxLength(30, { message: 'O tamanho maximo de uma cor de 7 caracteres.'})
    color: string;

    @IsNumber()
    @IsNotEmpty({message: 'O preço do produto deve ser informado.'})
    @Min(0.1, { message: 'O preço do produto é inválido.'})
    price: number;

    @IsNumber()
    @IsNotEmpty({message: 'O peso do produto deve ser informado.'})
    @Min(0.001, { message: 'O peso do produto é inválido.'})
    weight: number;

}
