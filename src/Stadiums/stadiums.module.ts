// stadiums.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StadiumsController } from './stadiums.controller';
import { StadiumsService } from './stadiums.service';
import { Stadium } from './stadiums.model';

@Module({
  imports: [SequelizeModule.forFeature([Stadium])],
  controllers: [StadiumsController],
  providers: [StadiumsService], // Make sure stadiumsService is listed as a provider
})
export class StadiumsModule {}
