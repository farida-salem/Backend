import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Referee } from './referees.model';

@Injectable()
export class RefereesService {
    constructor(
        @InjectModel(Referee)
        private refereeModel: typeof Referee
    ) { }

    async loadAllReferees(): Promise<Referee[]> {
        const referees = await this.refereeModel.findAll();
        return referees;
    }

    async findRefereeById(id: number): Promise<Referee> {
        const referees = await this.refereeModel.findOne({ where: { id } });
        return referees;
    }

    async loadAllMainReferees(): Promise<Referee[]> {
        const referees = await this.refereeModel.findAll({ where: { role: 'Head Referee' } });
        return referees;
    }

    async loadAssistantReferees(): Promise<Referee[]> {
        const referees = await this.refereeModel.findAll({ where: { role: 'Assistant Referee' } });
        return referees;
    }
}
