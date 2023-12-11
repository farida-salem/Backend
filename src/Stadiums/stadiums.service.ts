/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Stadium } from './stadiums.model';
@Injectable()
export class StadiumsService{
    
    constructor(
        @InjectModel(Stadium)
        private stadiumsModel: typeof Stadium
    ){}
    async loadAllstadiums(
        title?:string
    ): Promise<Stadium[]>{
        
        let where ={};

        if(title){
            where={
                name:{[Op.iLike]: `%${title}%`
            }
        }
    }
    const stadiums = await this.stadiumsModel.findAll({where});
    return stadiums;
    }
}