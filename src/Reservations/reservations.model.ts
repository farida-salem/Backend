import {User} from '../Users/users.model'
import {Match} from '../Matches/matches.model'
import { Column, Model, Table, DataType, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'Reservations', timestamps: false })
export class Reservation extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, field: 'user_id' })
  userId: number;

  @ForeignKey(() => Match)
  @Column({ type: DataType.INTEGER, field: 'match_id' })
  matchId: number;
}
