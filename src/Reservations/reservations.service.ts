/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Reservation } from './reservations.model';
@Injectable()
export class ReservationsService {

    constructor(
        @InjectModel(Reservation)
        private reservationsModel: typeof Reservation
    ) { }
    async createReservation(username: string, matchId: number) {
        return this.reservationsModel.create({ username, matchId });
    }
    async loadUserReservations(userId: string): Promise<Reservation[]> {
        return this.reservationsModel.findAll({ where: { userId } });
    }
    async loadMatchReservations(matchId: number): Promise<Reservation[]> {
        return this.reservationsModel.findAll({ where: { matchId } });
    }
}