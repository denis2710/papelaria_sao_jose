import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { UpdateProductDto } from './dto/update-product.dto';
import { User } from '../auth/user.entity';
import { History, HistoryActionType } from '../history/history.entity';
import { HistoryService } from '../history/history.service';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductRepository)
        private readonly productRepository: ProductRepository,
        private readonly historyService: HistoryService,
    ) {}

    async getAll(): Promise<Product[]> {
        return await this.productRepository.find({ relations: ['userCreator'] });
    }

    async getProductWithFilter(getProductsFilterDto: GetProductsFilterDto): Promise<Product[]> {
        return await this.productRepository.filterProduct(getProductsFilterDto);
    }

    async getOnlyActivesProducts(): Promise<Product[]> {
        return await this.productRepository.find({ where: { active: true },  relations: ['userCreator'] });
    }

    async getOnlyRemovedProducts(): Promise<Product[]> {
        return await this.productRepository.find({ where: { active: false },  relations: ['userCreator'] });
    }

    async findProductById(id: number): Promise<Product> {
        const product: Product = await this.productRepository.findOne(id);
        if (!product) {
            throw new NotFoundException('Product not found.');
        }
        return product;
    }

    async createProduct(user: User, createProductDto: CreateProductDto): Promise<Product> {
        const product = await this.productRepository.createProduct(user, createProductDto);

        const history = new History();
        history.Product = product;
        history.user = user;
        history.action = HistoryActionType.CREATE,
        history.changes = JSON.stringify({
                before: {},
                after: product,
            });
        history.date = new Date();

        await this.historyService.createHistory(history);
        return product;
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
