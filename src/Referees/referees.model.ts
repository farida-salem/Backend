import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Match } from '../Matches/matches.model';

@Table({ tableName: 'Referee',timestamps: false })
export class Referee extends Model {
  @Column({ field: 'id',  primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ field: 'name' })
  name: string;


  @Column({ field: 'role' })
  role: string;

  @HasMany(() => Match)
  matches: Match[];
}