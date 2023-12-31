/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { User } from './users.model';

// This should be a real class/interface representing a user entity
export type otherUser = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private usersModel: typeof User
  ) { }

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(userName: string): Promise<User | null> {
    return this.usersModel.findOne({ where: { userName } });
  }

  async loadAllUsers(
    title?: string
  ): Promise<User[]> {

    let where = {};

    if (title) {
      where = {
        userName: {
          [Op.iLike]: `%${title}%`
        }
      }
    }
    const users = await this.usersModel.findAll({ where });
    return users;
  }

  async updateUserRole(userId: number, newRole: string): Promise<User> {
    // Find the user by userId
    const userToUpdate = await this.usersModel.findByPk(userId);

    // If the user is not found, throw a NotFoundException
    if (!userToUpdate) {
      throw new NotFoundException();
    }

    // Update the role attribute
    userToUpdate.role = newRole;

    // Save the updated user to the database
    await userToUpdate.save();

    // Return the updated user
    return userToUpdate;
  }
  async updateUser(userName: string, updatedUserData: Partial<User>): Promise<User | null> {
    const userToUpdate = await this.findOne(userName);

    if (!userToUpdate) {
      return null;
    }

    Object.assign(userToUpdate, updatedUserData);
    await userToUpdate.save();
    return userToUpdate;
  }
  async createUser(userData: Partial<User>): Promise<User> {
    return await this.usersModel.create(userData);

  }
  async deleteUser(userName: string): Promise<boolean> {
    const userToDelete = await this.usersModel.findOne({ where: { userName } });

    if (!userToDelete) {
      throw new NotFoundException();
    }
    await userToDelete.destroy();
    return true;
  }
}
