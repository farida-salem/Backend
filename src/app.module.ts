import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './Teams/teams.module';
import { StadiumsModule } from './Stadiums/stadiums.module';
import { UsersModule } from './Users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './Teams/teams.model';
import { Stadium } from './Stadiums/stadiums.model';
import { User } from './Users/users.model';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'EFA',
    models: [Team, Stadium, User],
  }), TeamsModule, StadiumsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
