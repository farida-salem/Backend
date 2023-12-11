
import {Controller,Get,Query} from '@nestjs/common'
import {MatchesService} from './matches.service'
import { Match } from './matches.model';
@Controller('matches')
export class MatchesController
{
    constructor(private readonly teamsService: MatchesService){}

@Get()
findall(@Query('match') team: string
    ): Promise<Match[]>{
        return this.teamsService.loadAllMatches(team);
    }

}


