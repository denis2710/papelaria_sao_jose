import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductRepository)
        private readonly productRepository: ProductRepository,
    ) {}

    async getAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    async getProductWithFilter(getProductsFilterDto: GetProductsFilterDto): Promise<Product[]> {
        return await this.productRepository.filterProduct(getProductsFilterDto);
    }

    async getOnlyActivesProducts(): Promise<Product[]> {
        return await this.productRepository.find({ active: true });
    }

    async getOnlyRemovedProducts(): Promise<Product[]> {
        return await this.productRepository.find({ active: false });
    }

    async findProductById(id: number): Promise<Product> {
        const product: Product = await this.productRepository.findOne(id);
        if (!product) {
            throw new NotFoundException('Product not found.');
        }
        return product;
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        return await this.productRepository.createProduct(createProductDto);
    }

    async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
        const product: Product = await this.findProductById(id);
        const { name, description, color, weight, price } = updateProductDto;

        product.name        = name        || product.name;
        product.description = description || product.description;
        product.color       = color       || product.color;
        product.weight      = weight      || product.weight;
        product.price       = price       || product.price;

        await product.save();

        return product;
    }

    async removeProduct(id: number): Promise<Product> {
        const product = await this.findProductById(id);
        product.active = false;

        return await product.save();
    }

    async reactivateProduct(id: number): Promise<Product> {
        const product = await this.findProductById(id);
        product.active = true;

        return await product.save();
    }

}
