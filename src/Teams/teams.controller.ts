import { Controller, Get, Query, Param } from '@nestjs/common'
import { TeamsService } from './teams.service'
import { Team } from './teams.model';

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) { }

    @Get()
    findAll(@Query('team') team: string
    ): Promise<Team[]> {
        return this.teamsService.loadAllTeams(team);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Team | null> {
        return this.teamsService.loadTeamById(id);
    }
}


