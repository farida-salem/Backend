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

  async findOne(username: string): Promise<otherUser | undefined> {
    return this.users.find(user => user.username === username);
  }

  async loadAllUsers(
    title?: string
  ): Promise<User[]> {

    let where = {};

    if (title) {
      where = {
        name: {
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
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Update the role attribute
    userToUpdate.role = newRole;

    // Save the updated user to the database
    await userToUpdate.save();

    // Return the updated user
    return userToUpdate;
  }
}
