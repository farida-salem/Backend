import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Team',timestamps: false })
export class Team extends Model {
  @Column({ field: 'id',  primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ field: 'name' })
  name: string;

  @Column({ field: 'logo' })
  logo: string;

  // Add other columns as needed
}
