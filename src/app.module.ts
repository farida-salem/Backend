import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './Teams/teams.module';
import { StadiumsModule } from './Stadiums/stadiums.module';
import { UsersModule } from './Users/users.module';
import { MatchesModule } from './Matches/matches.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './Teams/teams.model';
import { Stadium } from './Stadiums/stadiums.model';
import { User } from './Users/users.model';
import { Match } from './Matches/matches.model';
import { Reservation } from './Reservations/reservations.model';
import { Referee } from './Referees/referees.model';
import { ReservationsModule } from './Reservations/reservations.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'EFA',
    models: [Team, Stadium, User, Match,Reservation,Referee],
  }), TeamsModule, StadiumsModule, UsersModule, MatchesModule,ReservationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
