import { Injectable, NotFoundException } from '@nestjs/common';
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
        stadiumName?: string
    ): Promise<Stadium[]> {
        let where = {};
        if (stadiumName) {
            where = {
                name: {
                    [Op.iLike]: `%${stadiumName}%`
                }
            }
        }
        const stadiums = await this.stadiumsModel.findAll({ where });
        return stadiums;
    }

    async createStadium(stadiumDto: StadiumDto): Promise<Stadium> {
        return this.stadiumsModel.create({ ...stadiumDto });
    }

    async updateStadium(id: number, updatedStadiumData: Partial<Stadium>): Promise<Stadium> {
        const stadiumToUpdate = await this.stadiumsModel.findByPk(id);
        if (!stadiumToUpdate) {
            throw new NotFoundException();
        }
        await stadiumToUpdate.update(updatedStadiumData);
        return stadiumToUpdate;
    }

    async deleteStadium(id: number): Promise<boolean> {
        const stadiumToDelete = await this.stadiumsModel.findOne({ where: { id } });
        if (!stadiumToDelete) {
            throw new NotFoundException();
        }
        await stadiumToDelete.destroy();
        return true;
    }

    async findStadiumById(id: number): Promise<Stadium | null> {
        const stadium = await this.stadiumsModel.findOne({ where: { id } })
        if (!stadium) {
            throw new NotFoundException('Stadium not found');
        }
        return stadium;
    }

}