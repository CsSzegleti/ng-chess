import { Injectable } from '@angular/core';
import { Move } from './move';

@Injectable({ providedIn: 'root' })
export class MoveStack {
  private moves: Array<Move> = [];
  push(move: Move) {
    this.moves.push(move)
  }

  pop(): Move | undefined {
    return this.moves.pop()
  }
}
