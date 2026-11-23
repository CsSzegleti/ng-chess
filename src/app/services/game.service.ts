import { Injectable } from '@angular/core';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  boardStates = new Array<Board>();
  moveNumber = 0;
  highlightedTileIdx? = undefined;

  newGame() {
    // TODO implement
  }

  public get currentState() {
    return this.boardStates[this.moveNumber];
  }
}
