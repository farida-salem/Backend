
import {Controller, Post} from '@nestjs/common'
import {ReservationsService} from './reservations.service'

@Controller('matches')
export class ReservationsController
{
    constructor(private readonly teamsService: ReservationsService){}

// @Get()
// findall(@Query('match') team: string
//     ): Promise<Team[]>{
//         return this.teamsService.loadAllTeams(team);
//     }
@Post(:)

}


