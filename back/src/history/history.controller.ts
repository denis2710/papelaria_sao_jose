import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { HistoryService } from './history.service';
import { AuthGuard } from '@nestjs/passport';
import { History } from './history.entity';
import { GetHistoryFilterDto } from './dto/get-history-filter.dto';

@Controller('history')
@UseGuards(AuthGuard())
export class HistoryController {

    constructor(
        private readonly historyService: HistoryService,
    ) {}

    @Get()
    async getAllHistory(@Query() getHistoryFilterDto: GetHistoryFilterDto): Promise<History[]> {
        if(Object.keys(getHistoryFilterDto).length){ 
            return await this.historyService.getHistoryWithFilter(getHistoryFilterDto);
        }

        return await this.historyService.getAllHistory();
    }


}
