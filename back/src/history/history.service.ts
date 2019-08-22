import { Injectable } from '@nestjs/common';
import { History } from './history.entity';
import { HistoryRepository } from './history.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { GetHistoryFilterDto } from './dto/get-history-filter.dto';

@Injectable()
export class HistoryService {

    constructor(
        @InjectRepository(HistoryRepository)
        private readonly historyRepository: HistoryRepository,
    ) {}

    async createHistory(history: History): Promise<History> {
        return await history.save();
    }

    async getAllHistory(): Promise<History[]> {
        return await this.historyRepository.find({
            relations: ['user', 'product'],
            order: {
                id: "DESC"
            }
         });
    }

    async getHistoryWithFilter(getHistoryFilterDto: GetHistoryFilterDto): Promise<History[]> {
        return await this.historyRepository.filterHistory(getHistoryFilterDto);
    }

}
