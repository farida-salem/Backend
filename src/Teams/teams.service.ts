import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Team } from './teams.model';

@Injectable()
export class TeamsService {

    constructor(
        @InjectModel(Team)
        private teamsModel: typeof Team
    ) { }
    async loadAllTeams(
        title?: string
    ): Promise<Team[]> {

        let where = {};

        if (title) {
            where = {
                name: {
                    [Op.iLike]: `%${title}%`
                }
            }
        }
        const teams = await this.teamsModel.findAll({ where });
        return teams;
    }
    async findTeamById(id: string): Promise<Team | null> {
        const team = await this.teamsModel.findOne({ where: { id } })
        if (!team) {
            throw new NotFoundException('Team not found');
        }
        return team;
    }
}