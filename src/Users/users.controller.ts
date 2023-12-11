
import {Controller,Get,Query} from '@nestjs/common'
import {UsersService} from './users.service'
import { User } from './user.model';
@Controller('user')
export class UsersController
{
    constructor(private readonly usersService: UsersService){}

@Get()
findall(@Query('user') user: string
    ): Promise<User[]>{
        return this.usersService.loadAllUsers(user);
    }

}


