import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Stadiums', timestamps: false })
export class Stadium extends Model {

  @Column({ field: 'name' ,primaryKey: true})
  stadiumName: string;

  @Column({ field: 'city' })
  city: string;

  @Column({ field: 'googleMapLocation' })
  googleMapLocation: string;

  @Column({ field: 'seatingRows' })
  seatingRows: number;

  @Column({ field: 'seatingColumns' })
  seatingColumns: number;

  // Add other columns as needed
}
