import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
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
    price?: number;
    
    @IsOptional()
    @IsNumber()
    weight?: number;
    
    @IsOptional()
    @IsString()
    color?: string;

}
