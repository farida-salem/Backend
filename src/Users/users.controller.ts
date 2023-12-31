
import { Controller, Get, Post, Delete, Param, Patch, Body, Query, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service'
import { User } from './users.model';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    // @Get()
    // findOne(@Query('user') user: string
    //     ): Promise<User | undefined>{
    //         return this.usersService.findOne(user);
    //     }

    @Patch(':id/update-role')
    async updateUserRole(
        @Param('id') userId: number,
        @Body('role') newRole: string,
    ): Promise<User> {
        return this.usersService.updateUserRole(userId, newRole);
    }

    @Get()
    findall(@Query('user') user: string
    ): Promise<User[]> {
        return this.usersService.loadAllUsers(user);
    }

    @Get(':username/:password')
    async findUserByUsernameAndPassword(
        @Param('username') username: string,
        @Param('password') password: string
    ): Promise<User | null> {
        return this.usersService.loadUserByUsernameAndPassword(username, password);
    }

    @Patch(':username')
    async updateUser(@Param('username') userName: string, @Body() updatedUserData: Partial<User>): Promise<User> {
        const updatedUser = await this.usersService.updateUser(userName, updatedUserData);

        if (!updatedUser) {
            throw new NotFoundException(`User with username ${userName} not found.`);
        }

        return updatedUser;
    }
    @Post()
    async createUser(@Body() userData: Partial<User>): Promise<User> {
        const newUser = await this.usersService.createUser(userData);

        return newUser;
    }
    @Delete(':username')
    async deleteUser(@Param('username') username: string): Promise<boolean> {
        const deletionStatus = await this.usersService.deleteUser(username);

        if (!deletionStatus) {
            throw new NotFoundException();
        }

        return deletionStatus;
    }

}


