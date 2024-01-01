
import { Controller, Get, Query } from '@nestjs/common'
import { RefereesService } from './referees.service'
import { Referee } from './referees.model';
@Controller('referees')
export class RefereesController {
    constructor(private readonly refereesService: RefereesService) { }

    @Get('main')
    findMainReferee(@Query('referees') referee: string
    ): Promise<Referee[]> {
        return this.refereesService.loadAllMainReferees(referee);
    }
    @Get('assistant')
    findAssistantReferee(@Query('referees') referee: string
    ): Promise<Referee[]> {
        return this.refereesService.loadAssisinatReferees(referee);
    }


}


