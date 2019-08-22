import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: '3306',
    database: 'teste_denis',
    username: 'root',
    password: '',
    insecureAuth: true,
    debug: false ,
    // database: `${__dirname}/../../data/papelaria.sqlite`,
    entities: [`${__dirname}/../**/*.entity.{js,ts}`],
    synchronize: true,
    // logging: true,
}
