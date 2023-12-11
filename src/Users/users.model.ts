import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'User', timestamps: false })
export class User extends Model {
  @Column({ type: DataType.STRING, unique: true, allowNull: false, field: 'userName' })
  userName: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'password' })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'firstName' })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'lastName' })
  lastName: string;

  @Column({ type: DataType.DATE, allowNull: false, field: 'birthDate' })
  birthDate: Date;

  @Column({ type: DataType.STRING, allowNull: false, field: 'gender' })
  gender: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'city' })
  city: string;

  @Column({ type: DataType.STRING, allowNull: true, field: 'address' })
  address: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'email' })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'role', defaultValue: 'fan' })
  role: string;
}
