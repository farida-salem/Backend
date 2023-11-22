import { Module ,forwardRef} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './Teams/teams.module';
// import { AuthModule } from './Auth/auth.module';
@Module({
  imports: [forwardRef(() => TeamsModule)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
