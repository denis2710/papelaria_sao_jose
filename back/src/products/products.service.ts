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
        history.product = product;
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

    async updateProduct(user: User, id: number, updateProductDto: UpdateProductDto): Promise<Product> {
        const product: Product = await this.findProductById(id);
        const { name, description, color, weight, price } = updateProductDto;

        let before: Product = new Product();
        let after: Product = new Product();

        if(name !==  undefined && name !== product.name) {
            before.name = product.name;
            after.name = name;
            product.name = name ;
        }

        if(description  !==  undefined && description !== product.description) {
            before.description = product.description;
            after.description = description;
            product.description = description ;
        }

        if(color !==  undefined && color !== product.color) {
            before.color = product.color;
            after.color = color;
            product.color = color ;
        }

        if(weight !==  undefined && weight !== product.weight) {
            before.weight = product.weight;
            after.weight = weight;
            product.weight = weight ;
        }

        if(price !==  undefined && price !== product.price) {
            before.price = product.price;
            after.price = price;
            product.price = price ;
        }

        await product.save();

        const history = new History();
        history.product = product;
        history.user = user;
        history.action = HistoryActionType.UPDATE,
        history.changes = JSON.stringify({ before, after });
        history.date = new Date();
        await this.historyService.createHistory(history);

        return product;
    }

    async removeProduct(user: User, id: number): Promise<Product> {
        const product = await this.findProductById(id);
        product.active = false;

        await product.save();

        const history = new History();
        history.product = product;
        history.user = user;
        history.action = HistoryActionType.ACTIVATE,
        history.changes = '{}';
        history.date = new Date();
        await this.historyService.createHistory(history);

        return product;
    }

    async reactivateProduct(user: User, id: number): Promise<Product> {
        const product = await this.findProductById(id);
        product.active = true;

        const history = new History();
        history.product = product;
        history.user = user;
        history.action = HistoryActionType.DELETE,
        history.changes = '{}';
        history.date = new Date();
        await this.historyService.createHistory(history);

        return await product.save();
    }

}
