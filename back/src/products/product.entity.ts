import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../auth/user.entity';

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    weight: number;

    @Column()
    color: string;

    @Column()
    active: boolean;

    // @ManyToOne(type => User, user => user.products, { eager: false } )
    @ManyToOne(type => User, null, { eager: false } )
    userCreator: User;

    @Column()
    userCreatorId: number;
}
