import {
  ApplicationConfig,
  InjectionToken,
  provideZonelessChangeDetection,
} from '@angular/core';
import { Tile } from './models/tile';
import { Board } from './models/board';
import { Player } from './models/player';
import { Color } from './enums/color';

export const BOARD_TOKEN = new InjectionToken<Board>('board');
export const LIGHT_PLAYER = new InjectionToken<Player>('light');
export const DARK_PLAYER = new InjectionToken<Player>('dark');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    {
      provide: BOARD_TOKEN,
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
    {
      provide: LIGHT_PLAYER,
      useValue: new Player(Color.light)
    },
    {
      provide: DARK_PLAYER,
      useValue: new Player(Color.dark)
    },
  ],
};
