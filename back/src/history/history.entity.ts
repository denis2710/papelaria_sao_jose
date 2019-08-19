import { BaseEntity, Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../auth/user.entity';
import { Product } from '../products/product.entity';

@Entity()
export class History extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, null, { eager: false } )
    user: User;

    @Column()
    userId: number;

    @ManyToOne(type => Product, null, { eager: false } )
    product: Product;

    @Column()
    productId: number;

    @Column()
    action: HistoryActionType;

    @Column()
    changes: string;

    @Column()
    date: Date;

}

export enum HistoryActionType {
    CREATE   = 'create',
    UPDATE   = 'update',
    DELETE   = 'delete',
    ACTIVATE = 'activate',
}
