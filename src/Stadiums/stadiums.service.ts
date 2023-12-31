/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Stadium } from './stadiums.model';
import { StadiumDto } from './stadium.dto';

@Injectable()
export class StadiumsService {

    constructor(
        @InjectModel(Stadium)
        private stadiumsModel: typeof Stadium
    ) { }
    async loadAllStadiums(
        title?: string
    ): Promise<Stadium[]> {

        let where = {};

        if (title) {
            where = {
                name: {
                    [Op.iLike]: `%${title}%`
                }
            }
        }
        const stadiums = await this.stadiumsModel.findAll({ where });
        return stadiums;
    }

    async createStadium(stadiumDto: StadiumDto): Promise<Stadium> {
        return this.stadiumsModel.create({ ...stadiumDto });

    }
}