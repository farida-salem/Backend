import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Match } from '../Matches/matches.model';

@Table({ tableName: 'Team', timestamps: false })
export class Team extends Model {
  @Column({ field: 'id', primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ field: 'name', unique: true, allowNull: false })
  name: string;

  @Column({ field: 'logo', unique: true, allowNull: false })
  logo: string;

  @HasMany(() => Match)
  matches: Match[];
}
