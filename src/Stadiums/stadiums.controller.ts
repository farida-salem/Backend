import { Controller, Body, Delete, Get, Post, Query, Patch, Param } from '@nestjs/common'
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
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Stadium | null> {
        return this.stadiumsService.findStadiumById(id);
    }
    @Post() // Use the HTTP POST method for inserting data
    async create(@Body() stadiumDto: StadiumDto): Promise<Stadium> {
        return this.stadiumsService.createStadium(stadiumDto);
    }
    @Patch(':id')
    async updateStadium(@Query('id') id: number, @Body() updatedStadiumData: Partial<Stadium>): Promise<Stadium> {
        const updatedStadium = await this.stadiumsService.updateStadium(id, updatedStadiumData);

        return updatedStadium;
    }
    @Delete(':id')
    async deleteStadium(@Query('id') id: number): Promise<boolean> {
        const deletionStatus = await this.stadiumsService.deleteStadium(id);

        return deletionStatus;
    }q
}

