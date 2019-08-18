import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Product } from '../products/product.entity';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({ select: false })
    password: string;

    @Column({ select: false })
    salt: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    isAdmin: boolean;

    // @OneToMany(type => Product, product => product.userCreator, { eager: true } )
    // products: Product[];

    async validadePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}
