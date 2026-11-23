import { Service } from '@angular/core';
import { Move } from '../../../models/move';
import { inject } from '@angular/core';
import { BOARD_TOKEN } from '../../../app.config';

@Service()
export class MoveExecutorService {
  protected board = inject(BOARD_TOKEN);

  execute(move: Move) {
    this.validate(move);
    const fromTile = this.board.tiles[move.from];
    const fromPiece = fromTile.piece;
    if (!fromPiece) return;

    const toTile = this.board.tiles[move.to];
    toTile.piece = fromPiece;

    fromTile.piece = undefined;
  }

  undo(move: Move) {
    const fromTile = this.board.tiles[move.from];
    const toTile = this.board.tiles[move.to];
    const toPiece = toTile.piece;
    if (!toPiece) return;

    fromTile.piece = toPiece;
    toTile.piece = undefined;
  }

  protected validate(move: Move) {
    if (move.to < 0 || move.to >= 64) {
      throw new Error('Invalid location.');
    }
  }
}
