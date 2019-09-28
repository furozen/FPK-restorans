import { Injectable } from '@angular/core';
import {DataTransportService} from './data/data-transport.service';
import {createLogger, ILogger} from './utils/Logger';
import {IIDClass} from './interfaces';
import {SocketService} from './data/socket/socket.service';

@Injectable({
  providedIn: 'root'
})
export class MainService implements IIDClass{
  ID: string = 'MainService';
  logger: ILogger = createLogger(this.ID);

  constructor(private dataTrasportService:DataTransportService,
              ) { }


  async initDataTransport() {
    this.logger.verbose('initDataTransport');
    await this.dataTrasportService.initIoConnection();

    this.dataTrasportService.dataSubject$.subscribe(message => {
      this.logger.debug(message);
      switch (message.id) {
        case 'Handshake':{


        }


      }
    });
  }

}
