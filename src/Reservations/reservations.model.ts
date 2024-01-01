import {User} from '../Users/users.model'
import {Match} from '../Matches/matches.model'
import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'Reservation', timestamps: false })
export class Reservation extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true,allowNull: false,unique: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, field: 'userid' })
  userId: number;

  @ForeignKey(() => Match)
  @Column({ type: DataType.INTEGER, field: 'matchid' })
  matchId: number;

  @Column({ type: DataType.INTEGER, field: 'reservedRow' })
  reservedRow: number;

  @Column({ type: DataType.INTEGER, field: 'reservedCol' })
  reservedColumn: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Match)
  match: Match;
}
