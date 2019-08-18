import { Controller, Get, Post, Body, Param, Query, Put, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { puts } from 'util';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productsService: ProductsService,
    ) { }

    @Get()
    getProducts(@Query() getProductFilterDto: GetProductsFilterDto): Promise<Product[]> {

        if (Object.keys(getProductFilterDto).length) {
            return this.productsService.getProductWithFilter(getProductFilterDto);
        }

        return this.productsService.getAll();
    }

    @Get('/active')
    getProductsActives(@Query() getProductFilterDto: GetProductsFilterDto): Promise<Product[]> {

        if (Object.keys(getProductFilterDto).length) {
            getProductFilterDto.active = true;
            return this.productsService.getProductWithFilter(getProductFilterDto);
        }

        return this.productsService.getOnlyActivesProducts();
    }

    @Get('/removed')
    getProductsRemoved(@Query() getProductFilterDto: GetProductsFilterDto): Promise<Product[]> {
        if (Object.keys(getProductFilterDto).length) {
            getProductFilterDto.active = false;
            return this.productsService.getProductWithFilter(getProductFilterDto);
        }

        return this.productsService.getOnlyRemovedProducts();
    }

    @Get('/:id')
    findProductById(@Param() id: number): Promise<Product> {
        return this.productsService.findProductById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    creteProduduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.createProduct(createProductDto);
    }

    @Put('/:id')
    UpdateProduct(@Param() id: number, @Body() updateProduct: UpdateProductDto): Promise<Product> {
        return this.productsService.updateProduct(id, updateProduct);
    }

    @Delete('/:id')
    removeProduct(@Param() id: number): Promise<Product> {
        return this.productsService.removeProduct(id);
    }

    @Patch('/:id')
    reactiveProduct(@Param() id: number): Promise<Product> {
        return this.productsService.reactivateProduct(id);
    }

}
