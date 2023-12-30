
import { Controller, Get, Param, Patch, Body, Query, NotFoundException } from '@nestjs/common';
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
    findall(@Query('users') user: string
    ): Promise<User[]> {
        return this.usersService.loadAllUsers(user);
    }
    
    @Patch(':username')
    async updateUser(@Param('username') userName: string, @Body() updatedUserData: Partial<User>): Promise<User> {
        const updatedUser = await this.usersService.updateUser(userName, updatedUserData);
        
        if (!updatedUser) {
            throw new NotFoundException(`User with username ${userName} not found.`);
        }

        return updatedUser;
    }
   

}


