/* eslint-disable prettier/prettier */
import {Controller,Get,Query} from '@nestjs/common'
import {TeamsService} from './teams.service'
import {TeamsModel} from '../../models/team';
@Controller('teams')
export class TeamsController
{
    constructor(private readonly teamsService: TeamsService){}

@Get()
getTeams(
 @Query('team') team: string
): Promise<TeamsModel>{
    return this.teamsService.loadAllTeams(team);
}
}


