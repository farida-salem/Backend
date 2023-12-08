/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import {Team} from '../../models/team'

@Module({
    imports:[],
    controllers: [TeamsController],
    providers: [TeamsService]
})
export class TeamsModule {}