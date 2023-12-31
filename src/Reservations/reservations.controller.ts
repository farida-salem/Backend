
import { Controller, Post, Param, Get, Query } from '@nestjs/common'
import { ReservationsService } from './reservations.service'
import { Reservation } from './reservations.model';

@Controller('Reservations')
export class ReservationsController {
    constructor(private readonly reservationsService: ReservationsService) { }

    @Get('userId')
    async findUserReservations(@Param('userId') userId: string): Promise<Reservation[]> {
        return this.reservationsService.loadUserReservations(userId);
    }

    @Get(":matchId")
    async findMatchReservations(@Param('matchId') matchId: number): Promise<Reservation[]> {
        return this.reservationsService.loadMatchReservations(matchId);
    }

    @Post(":username/:matchId")
    async createReservation(@Param('username') username: string, @Param('matchId') matchId: number): Promise<Reservation> {
        const newReservation = await this.reservationsService.createReservation(username, matchId);
        return newReservation;
    }
}

