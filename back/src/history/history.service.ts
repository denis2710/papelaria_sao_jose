import { Injectable } from '@nestjs/common';
import { History } from './history.entity';
import { HistoryRepository } from './history.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HistoryService {

    constructor(
        @InjectRepository(HistoryRepository)
        private readonly historyRepository: HistoryRepository,
    ) {}

    async createHistory(history: History): Promise<History> {
        console.log({history});
        return await history.save();
    }

    async getAllHistory() {
        return await this.historyRepository.find();
    }
}
