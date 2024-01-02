/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Reservation } from './reservations.model';
import { Op } from 'sequelize';

@Injectable()
export class ReservationsService {

    constructor(
        @InjectModel(Reservation)
        private reservationsModel: typeof Reservation
    ) { }
    async createReservation(reservationModel:Partial<Reservation>): Promise<Reservation> {
        return this.reservationsModel.create(reservationModel);
    }
    async loadUserReservations(userId: number): Promise<Reservation[]> {
        return this.reservationsModel.findAll({ where: { userId } });
    }
    async loadMatchReservations(matchId: number): Promise<Reservation[]> {
        return this.reservationsModel.findAll({ where: { matchId } });
    }
    async deleteReservation(id: number): Promise<boolean> {
        const reservation = await this.reservationsModel.findOne({ where: { id } });
        if (!reservation) {
            throw new NotFoundException();
          }
        await reservation.destroy();
        return true;
    }
    async loadAllReservations(reservation: string): Promise<Reservation[]> {
        let where = {};
        if (reservation) {
            where = {
                userName: {
                    [Op.iLike]: `%${reservation}%`
                }
            }
        }
        const reservations = await this.reservationsModel.findAll({ where });
        return reservations;
    }
}