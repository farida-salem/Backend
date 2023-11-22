/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
// import { SequelizeModule } from '@nestjs/sequelize';
// import {TeamsModel} from '../../models/team';

@Module({
    imports:[],
    controllers: [TeamsController],
    providers: [TeamsService]
})
export class TeamsModule {}