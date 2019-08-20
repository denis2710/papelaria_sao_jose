import { IsNotEmpty, IsString, IsNumber, IsOptional, Min } from 'class-validator';
import { IsNull } from 'typeorm';

export class UpdateProductDto {

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;
    
    @IsOptional()
    @IsNumber()
    @IsNotEmpty({message: 'O preço do produto deve ser informado.'})
    @Min(0.1, { message: 'O preço do produto é inválido.'})
    price?: number;
    
    @IsOptional()
    @IsNumber()
    weight?: number;
    
    @IsOptional()
    @IsString()
    color?: string;

}
