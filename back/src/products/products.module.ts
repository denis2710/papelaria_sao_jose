import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { AuthModule } from '../auth/auth.module';
import { HistoryService } from '../history/history.service';
import { HistoryModule } from '../history/history.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository]),
    AuthModule,
    HistoryModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
