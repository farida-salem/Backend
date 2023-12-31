import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Match } from '../Matches/matches.model'; // Import the 'Match' class

@Table({ tableName: 'Stadium', timestamps: false })
export class Stadium extends Model {
    @Column({ field: 'id' ,primaryKey: true})
    id: number;

  @Column({ field: 'name' })
  name: string;

  @Column({ field: 'city' })
  city: string;

  @Column({ field: 'googleMapLocation' })
  googleMapLocation: string;

  @Column({ field: 'seatingRows' })
  seatingRows: number;

  @Column({ field: 'seatingColumns' })
  seatingColumns: number;

  @HasMany(() => Match)
  matches: Match[];
}
