import { EntityRepository, Repository } from 'typeorm';
import { History } from './history.entity';
import { GetHistoryFilterDto } from './dto/get-history-filter.dto';

@EntityRepository(History)
export class HistoryRepository extends Repository<History> {

  async filterHistory(getHistoryFilterDto: GetHistoryFilterDto): Promise<History[]> {     
    const { id, userId, productId, action } = getHistoryFilterDto;

    let queryString: string = '';
    const queryParams: {
        id?: number,
        userId?: number,
        productId?: number,
        action?: string,        
    } = {};

    if (id) {
        queryString += 'id = :id';
        queryParams.id = id ;
    }

    if (userId) {
        queryString += queryString ? ' AND ' : '';
        queryString += 'userId = :userId';
        queryParams.userId = userId ;
    }

    if (productId) {
        queryString += queryString ? ' AND ' : '';
        queryString += 'productId = :productId';
        queryParams.productId = productId ;
    }

    if (action) {
        queryString += queryString ? ' AND ' : '';
        queryString += 'action = :action';
        queryParams.action = action;
    }
  
    return await this.createQueryBuilder('history')
        // .innerJoinAndSelect('history.userCreator', 'userCreator')
        .where(queryString, queryParams)
        .getMany();
  }

}