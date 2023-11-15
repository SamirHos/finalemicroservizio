import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { VenditaEvento } from './eventi/evento.vendita';
import { OrdineEvento } from './eventi/evento.ordini';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern(' Venduti')
  getVendite(data: VenditaEvento) {
    this.appService.getVenduto(data);
  }

  @EventPattern('Ordinati')
  GetOrdini(data: OrdineEvento) {
    this.appService.getOrdinati(data);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
