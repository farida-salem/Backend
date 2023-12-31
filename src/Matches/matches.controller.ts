
import { Controller, Get, Query, Post, Delete, Body, Patch, Param, NotFoundException } from '@nestjs/common'
import { MatchesService } from './matches.service'
import { Match } from './matches.model';
@Controller('matches')
export class MatchesController {
    constructor(private readonly matchesService: MatchesService) { }

    @Get()
    findall(@Query('match') team: string
    ): Promise<Match[]> {
        return this.matchesService.loadAllMatches(team);
    }
    @Post()
    async createMatch(@Body() matchData: Partial<Match>): Promise<Match> {
        const newMatch = await this.matchesService.createMatch(matchData);

        return newMatch;
    }
    @Patch(':id')
    async updateMatch(
        @Param('id') matchId: number,
        @Body() updatedMatchData: Partial<Match>,
    ): Promise<Match> {
        const updatedMatch = await this.matchesService.updateMatch(matchId, updatedMatchData);

        if (!updatedMatch) {
            throw new NotFoundException();
        }

        return updatedMatch;
    }
    @Delete(':id')
    async deleteMatch(@Param('id') matchId: number): Promise<boolean> {
        const deletionStatus = await this.matchesService.deleteMatch(matchId);

        if (!deletionStatus) {
            throw new NotFoundException();
        }

        return deletionStatus;
    }
}


