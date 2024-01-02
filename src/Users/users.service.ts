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

  async loadUserByUsernameAndPassword(username: string, password: string): Promise<User | null> {
    const user = await this.usersModel.findOne({
      where: {
        userName: username,
        password: password,
      },
    });

    return user;
  }

  async loadpending(status: string): Promise<User[] | null> {
    const user = await this.usersModel.findAll({
      where: {
        status: status,
      },
    });

    return user;
  }


}
