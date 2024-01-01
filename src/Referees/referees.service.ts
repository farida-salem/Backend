/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Referee } from './referees.model';
@Injectable()
export class RefereesService{
    
    constructor(
        @InjectModel(Referee)
        private refereeModel: typeof Referee
    ){}
    async loadAllReferees(
        title?: string
    ): Promise<Referee[]> {

        let where = {};

        // if (title) {
        //     where = {
        //         name: {
        //             [Op.iLike]: `%${title}%`
        //         }
        //     }
        // }
        const referees = await this.refereeModel.findAll({ where });
        return referees;
    }
    async loadAllMainReferees(title?: string): Promise<Referee[]> {
        // let where = {};

        // if (title) {
        //     where = {
        //         name: { [Op.iLike]: `%${title}%` }
        //     };
        // }

        const referee = await this.refereeModel.findAll();
        return referee;
    }
    async loadAssisinatReferees(
        title?: string
    ): Promise<Referee[]> {
        let where = {};

        if (title) {
            where = {
                name: { [Op.iLike]: `%${title}%` }
            };
        }

        const referee = await this.refereeModel.findAll({ where: { role: 'Assistant Referee' } });
        return referee;
    }
}