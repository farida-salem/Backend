
import {Controller, Post} from '@nestjs/common'
import {ReservationsService} from './reservations.service'

@Controller('Reservations')
export class ReservationsController
{
    constructor(private readonly reservationsService: ReservationsService){}

// @Get()
// findall(@Query('match') team: string
//     ): Promise<Team[]>{
//         return this.teamsService.loadAllTeams(team);
//     }
@Post(:)

}


