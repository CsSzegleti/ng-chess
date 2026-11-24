import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { Tile } from './models/tile';
import { Board } from './models/board';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    {
      provide: Board,
      // prettier-ignore
      useValue: new Board([
        new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
        new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
        new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
        new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
        new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
        new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
        new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
        new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
      ]),
    },
  ],
};
