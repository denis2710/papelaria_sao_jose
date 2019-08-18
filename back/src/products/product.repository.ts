import { Repository, EntityRepository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto, NumberFilterRule } from './dto/get-products-filter.dto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    async filterProduct(getProductsFilterDto: GetProductsFilterDto): Promise<Product[]> {
        const { name, description, color, weight, price, active, weightRule, priceRule} = getProductsFilterDto;

        let queryString: string = '';
        const queryParams: {
            name?: string,
            description?: string,
            color?: string,
            weight?: number,
            price?: number,
            active?: boolean,
        } = {};

        if (name) {
            queryString += 'name like :name';
            queryParams.name = `%${name}%`;
        }

        if (description) {
            queryString += queryString ? ' AND ' : '';
            queryString += 'description like :description';
            queryParams.description = `%${description}%`;
        }

        if (color) {
            queryString += queryString ? ' AND ' : '';
            queryString += 'color like :color';
            queryParams.color = `%${color}%`;
        }

        if (active === true || active === false) {
            queryString += queryString ? ' AND ' : '';
            queryString += 'active = :active';
            queryParams.active = active;
        }

        if (price && priceRule) {
            queryString += queryString ? ' AND ' : '';
            queryString += `price ${NumberFilterRule[priceRule]} :price `;
            queryParams.price = price;
        }

        if (weight && weightRule) {
            queryString += queryString ? ' AND ' : '';
            queryString += `weight ${NumberFilterRule[weightRule]} :weight `;
            queryParams.weight = weight;
        }

        return await this.createQueryBuilder().where(queryString, queryParams).getMany();
    }

    async createProduct(createProductDto: CreateProductDto) {
        const { name, description, weight, color, price } = createProductDto;
        const product = new Product();

        product.name = name;
        product.description = description;
        product.color = color;
        product.weight = weight;
        product.price = price;
        product.active = true;

        return await product.save();
    }

}
