import { Module ,forwardRef} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './Teams/teams.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './Teams/teams.model';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'EFA',
    models: [Team],
  }),TeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
