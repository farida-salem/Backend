
import {Controller,Get,Query} from '@nestjs/common'
import {RefereesService} from './referees.service'
import { Referee } from './referees.model';
@Controller('referees')
export class RefereesController
{
    constructor(private readonly refereesService: RefereesService){}

@Get()
findall(@Query('referee') referee: string
    ): Promise<Referee[]>{
        return this.refereesService.loadAllReferees(referee);
    }

}


