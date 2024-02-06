// Matches.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';
import { Match } from './matches.model';

@Module({
  imports: [SequelizeModule.forFeature([Match])],
  controllers: [MatchesController],
  providers: [MatchesService], // Make sure MatchesService is listed as a provider
})
export class MatchesModule { }
