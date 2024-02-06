// Reservations.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { Reservation } from './reservations.model';

@Module({
  imports: [SequelizeModule.forFeature([Reservation])],
  controllers: [ReservationsController],
  providers: [ReservationsService], // Make sure ReservationsService is listed as a provider
})
export class ReservationsModule { }
