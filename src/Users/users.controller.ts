
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

    @Patch(':userName/update-role')
    async updateUserRole(
        @Param('userName') userId: number,
        @Body('role') newRole: string,
    ): Promise<User> {
        return this.usersService.updateUserRole(userId, newRole);
    }

    @Get()
    findall(@Query('user') user: string
    ): Promise<User[]> {
        return this.usersService.loadAllUsers(user);
    }

    @Patch(':userName')
    async updateUser(@Param('userName') userName: string, @Body() updatedUserData: Partial<User>): Promise<User> {

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
    @Delete(':userName')
    async deleteUser(@Param('userName') userName: string): Promise<boolean> {
        const deletionStatus = await this.usersService.deleteUser(userName);

        if (!deletionStatus) {
            throw new NotFoundException();
        }

        return deletionStatus;
    }

}


