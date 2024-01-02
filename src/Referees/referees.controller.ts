import { Controller, Get, Query } from '@nestjs/common';
import { RefereesService } from './referees.service';
import { Referee } from './referees.model';

@Controller('referees')
export class RefereesController {
    constructor(private readonly refereesService: RefereesService) {}

    @Get('main')
    findMainReferee(): Promise<Referee[]> {
        return this.refereesService.loadAllMainReferees();
    }

    @Get('assistant')
    findAssistantReferee(): Promise<Referee[]> {
        return this.refereesService.loadAssistantReferees();
    }

    @Get()
    findById(@Query('id') id?: number): Promise<Referee> {
        if (id) {
            return this.refereesService.findRefereeById(id);
        }
        // return this.refereesService.loadAllReferees();
    }
}
