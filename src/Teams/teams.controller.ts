
import {Controller,Get,Query} from '@nestjs/common'
import {TeamsService} from './teams.service'
import { Team } from './teams.model';
@Controller('teams')
export class TeamsController
{
    constructor(private readonly teamsService: TeamsService){}

@Get()
findall(@Query('team') team: string
    ): Promise<Team[]>{
        return this.teamsService.loadAllTeams(team);
    }

}


