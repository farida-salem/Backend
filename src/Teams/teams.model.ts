import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Match } from '../Matches/matches.model';

@Table({ tableName: 'Team',timestamps: false })
export class Team extends Model {
  @Column({ field: 'id',  primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ field: 'name' })
  name: string;

  @Column({ field: 'logo' })
  logo: string;

  @HasMany(() => Match)
  matches: Match[];
}
