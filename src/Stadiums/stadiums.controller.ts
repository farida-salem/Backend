
import { Controller, Get, Query } from '@nestjs/common'
import { StadiumsService } from './stadiums.model'
import { Stadium } from './stadiums.model';
import { StadiumDto } from './stadium.dto';
@Controller('stadiums')
export class TStadiumsController {
    constructor(private readonly teamsService: StadiumsService) { }

    @Get()
    findall(@Query('stadium') team: string
    ): Promise<Stadium[]> {
        return this.teamsService.loadAllTeams(stadium);
    }

}


@Post() // Use the HTTP POST method for inserting data
async create(@Body() stadiumDto: StadiumDto): Promise < Stadium > {
    return this.teamsService.createStadium(stadiumDto);
}
}