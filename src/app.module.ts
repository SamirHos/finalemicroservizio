import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { EventiController } from './eventi/eventi.controller';
// import { EventiModule } from './eventi/eventi.module';

@Module({
  imports: [
    /*EventiModule*/
  ],
  controllers: [AppController /*, EventiController*/],
  providers: [AppService],
})
export class AppModule {}
