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
    this.boardStates = [new Board()]
    this.boardStates[0].reset()
  }

  public get currentState() {
    return this.boardStates[this.moveNumber];
  }
}
