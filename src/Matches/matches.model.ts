import {Team} from '../Teams/teams.model'
import {Stadium} from '../Stadiums/stadiums.model'
import {Referee} from '../Referees/referees.model'
import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Reservation } from '../Reservations/reservations.model';

@Table({ tableName: 'Matches', timestamps: false })
export class Match extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Stadium)
  @Column({ type: DataType.INTEGER, field: 'stadium_id' })
  stadiumId: number;

  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER, field: 'team_away' })
  teamAway: number;

  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER, field: 'team_home' })
  teamHome: number;

  @ForeignKey(() => Team)
  @Column({ type: DataType.STRING, field: 'team_away_logo' })
  teamAwayLogo: string;

  @ForeignKey(() => Team)
  @Column({ type: DataType.STRING, field: 'team_home_logo' })
  teamHomeLogo:  string;

  @ForeignKey(() => Referee)
  @Column({ type: DataType.INTEGER, field: 'main_referee' })
  mainReferee: number;

  @ForeignKey(() => Referee)
  @Column({ type: DataType.INTEGER, field: 'line_referee_right' })
  lineRefereeRight: number;

  @ForeignKey(() => Referee)
  @Column({ type: DataType.INTEGER, field: 'line_referee_left' })
  lineRefereeLeft: number;

  @Column({ type: DataType.DATE, field: 'time' })
  time: Date;

  @Column({ type: DataType.BOOLEAN, field: 'is_full' })
  isFull: boolean;

  @BelongsTo(() => Stadium)
  stadium: Stadium;

  @BelongsTo(() => Team, 'teamAway')
  teamAwayData: Team;

  @BelongsTo(() => Team, 'teamHome')
  teamHomeData: Team;

  @BelongsTo(() => Referee, 'mainReferee')
  mainRefereeData: Referee;

  @BelongsTo(() => Referee, 'lineRefereeRight')
  lineRefereeRightData: Referee;

  @BelongsTo(() => Referee, 'lineRefereeLeft')
  lineRefereeLeftData: Referee;

  @HasMany(() => Reservation)
  reservations: Reservation[];

}
