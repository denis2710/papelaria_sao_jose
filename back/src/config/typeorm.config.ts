import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: `${__dirname}/../../data/papelaria.sqlite`,
    entities: [`${__dirname}/../**/*.entity.{js,ts}`],
    synchronize: true,
    // logging: true,
}
