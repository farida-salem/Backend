// referee.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RefereeController } from './referee.controller';
import { RefereeService } from './referee.service';
import { Referee } from './referee.model';

@Module({
  imports: [SequelizeModule.forFeature([Referee])],
  controllers: [RefereeController],
  providers: [RefereeService], // Make sure RefereeService is listed as a provider
})
export class RefereeModule {}
