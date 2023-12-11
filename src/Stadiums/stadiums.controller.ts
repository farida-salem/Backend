

import { Controller, Body, Get, Post, Query } from '@nestjs/common'
import { StadiumsService } from './stadiums.service'
import { Stadium } from './stadiums.model';
import { StadiumDto } from './stadium.dto';
@Controller('stadiums')
export class StadiumsController {
    constructor(private readonly stadiumsService: StadiumsService) { }

    @Get()
    findall(@Query('stadium') stadium: string
    ): Promise<Stadium[]> {
        return this.stadiumsService.loadAllStadiums(stadium);

    }




    @Post() // Use the HTTP POST method for inserting data
    async create(@Body() stadiumDto: StadiumDto): Promise<Stadium> {
        return this.stadiumsService.createStadium(stadiumDto);
    }
}

