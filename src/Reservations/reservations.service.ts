/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Reservation } from './reservations.model';
@Injectable()
export class ReservationsService{
    
    constructor(
        @InjectModel(Reservation)
        private teamsModel: typeof Reservation
    ){}
    // async loadAllTeams(
    //     title?:string
    // ): Promise<R[]>{
        
    //     let where ={};

    //     if(title){
    //         where={
    //             name:{[Op.iLike]: `%${title}%`
    //         }
    //     }
    // }
    // const teams = await this.teamsModel.findAll({where});
    // return teams;
    // }
}