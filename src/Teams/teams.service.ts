/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {TeamsModel} from '../../models/team';
import { Op } from 'sequelize';
@Injectable()
export class TeamsService{
    constructor(
        @InjectModel(TeamsModel)
        private teamsModel: typeof TeamsModel
    ){}
    async loadAllTeams(
        title?:string
    ): Promise<TeamsModel>{
        let where ={};
        if(title){
            where={
                name:{[Op.iLike]: `%${title}%`
            }
        }
    }
    const teams = await this.teamsModel.findAll({where});
    return teams;
}
}