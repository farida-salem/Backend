import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Match } from '../Matches/matches.model';

@Table({ tableName: 'Referees',timestamps: false })
export class Referee extends Model {
  @Column({type:DataType.INTEGER, field: 'id',  primaryKey: true, autoIncrement: true,allowNull: false,unique: true })
  id: number;

  @Column({type:DataType.STRING, field: 'name' })
  name: string;


  @Column({type:DataType.STRING, field: 'role' })
  role: string;

  @HasMany(() => Match)
  matches: Match[];
}