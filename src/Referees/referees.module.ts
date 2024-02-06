// referee.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RefereesController } from './referees.controller';
import { RefereesService } from './referees.service';
import { Referee } from './referees.model';

@Module({
  imports: [SequelizeModule.forFeature([Referee])],
  controllers: [RefereesController],
  providers: [RefereesService], // Make sure RefereeService is listed as a provider
})
export class RefereeModule { }
