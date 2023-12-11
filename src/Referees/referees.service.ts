/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Referee } from './referee.model';
@Injectable()
export class RefereeService{
    
    constructor(
        @InjectModel(Referee)
        private refereeModel: typeof Referee
    ){}
    async loadAllReferee(
        title?:string
    ): Promise<Referee[]>{
        
        let where ={};

        if(title){
            where={
                name:{[Op.iLike]: `%${title}%`
            }
        }
    }
    const referee = await this.refereeModel.findAll({where});
    return referee;
    }
}