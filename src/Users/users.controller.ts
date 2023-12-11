
import {Controller,Get,Query} from '@nestjs/common'
import {UsersService} from './users.service'
import { User } from './users.model';
@Controller('user')
export class UsersController
{
    constructor(private readonly usersService: UsersService){}

@Get()
findOne(@Query('user') user: string
    ): Promise<User | undefined>{
        return this.usersService.findOne(user);
    }

}


