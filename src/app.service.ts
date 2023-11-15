import { Injectable } from '@nestjs/common';
import { VenditaEvento } from './eventi/evento.vendita';
import { OrdineEvento } from './eventi/evento.ordini';

@Injectable()
export class AppService {
  getVenduto(data: VenditaEvento) {
    console.log(' venduto - COMMUNICATION', data);
    // codice da eseguire ad ogni nuovo evento
  }

  getOrdinati(data: OrdineEvento) {
    console.log(' ordinati - COMMUNICATION', data);
    // codice da eseguire ad ogni nuovo evento
  }

  getHello(): string {
    return 'Hello World!';
  }
}
