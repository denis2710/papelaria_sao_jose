import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '192.168.1.60', 
    database: 'teste_denis', 
    username: 'root', 
    password: 'advantech', 
    insecureAuth: true, 
    debug: false ,   
    // database: `${__dirname}/../../data/papelaria.sqlite`,
    entities: [`${__dirname}/../**/*.entity.{js,ts}`],
    synchronize: true,
    // logging: true,

  
    
}
