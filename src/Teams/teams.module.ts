// teams.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { Team } from './teams.model';

@Module({
  imports: [SequelizeModule.forFeature([Team])],
  controllers: [TeamsController],
  providers: [TeamsService], // Make sure TeamsService is listed as a provider
})
export class TeamsModule {}
