import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductsModule,
    AuthModule,
    HistoryModule,
  ],
})
export class AppModule {}
