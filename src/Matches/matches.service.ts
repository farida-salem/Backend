/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Match } from './matches.model';
@Injectable()
export class MatchesService{
    
    constructor(
        @InjectModel(Match)
        private MatchesModel: typeof Match
    ){}
    async loadAllMatches(
        title?:string
    ): Promise<Match[]>{
        
        let where ={};

        if(title){
            where={
                name:{[Op.iLike]: `%${title}%`
            }
        }
    }
    const Matches = await this.MatchesModel.findAll({where});
    return Matches;
    }
}