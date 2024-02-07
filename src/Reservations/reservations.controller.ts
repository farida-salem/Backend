import { Controller, Post, Param, Get, Query, Body, Delete } from '@nestjs/common'
import { ReservationsService } from './reservations.service'
import { Reservation } from './reservations.model';

@Controller('Reservations')
export class ReservationsController {
    constructor(private readonly reservationsService: ReservationsService) { }

    @Get()
    async findAll(@Query('reservation') reservation: string): Promise<Reservation[]> {
        return this.reservationsService.loadAllReservations(reservation);
    }

    @Get('user/:userId')
    async findUserReservations(@Param('userId') userId: number): Promise<Reservation[]> {
        return this.reservationsService.loadUserReservations(userId);
    }

    @Get("match/:matchId")
    async findMatchReservations(@Param('matchId') matchId: number): Promise<Reservation[]> {
        return this.reservationsService.loadMatchReservations(matchId);
    }

    @Post()
    async createReservation(@Body() reservationModel: Partial<Reservation>): Promise<Reservation> {
        const newReservation = await this.reservationsService.createReservation(reservationModel);
        return newReservation;
    }

    @Delete(':id')
    async deleteReservation(@Param('id') id: number): Promise<boolean> {
        const deletionStatus = await this.reservationsService.deleteReservation(id);

        return deletionStatus;
    }
}

