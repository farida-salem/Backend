
import {Controller,Get,Query} from '@nestjs/common'
import {StadiumsService} from './stadiums.service'
import { Stadium } from './stadiums.model';
@Controller('stadiums')
export class StadiumsController
{
    constructor(private readonly stadiumsService: StadiumsService){}

@Get()
findall(@Query('stadium') team: string
    ): Promise<Stadium[]>{
        return this.stadiumsService.loadAllstadiums(team);
    }

}


