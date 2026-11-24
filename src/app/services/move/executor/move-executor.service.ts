import { Service } from '@angular/core';
import { Move } from '../../../models/move';
import { inject } from '@angular/core';
import { Board } from '../../../models/board';
import { Piece } from '../../../models/pieces/piece';

@Service()
export class MoveExecutorService {
  protected board = inject(Board);

  execute(move: Move) {
    this.validate(move);

    const fromPiece = this.fromPieceToHand(move);
    if (!fromPiece) return;
    const toTile = this.board.tiles[move.to!];
    toTile.piece = fromPiece;
  }

  undo(move: Move) {
    const fromTile = this.board.tiles[move.from!];
    const toTile = this.board.tiles[move.to!];
    const toPiece = toTile.piece;
    if (!toPiece) return;

    fromTile.piece = toPiece;
    toTile.piece = undefined;
  }

  protected fromPieceToHand(move: Move): Piece | undefined {
    let fromPiece;
    if (move.from == undefined) {
      fromPiece = move.piece;
    } else {
      const fromTile = this.board.tiles[move.from];
      fromPiece = fromTile.piece;
      fromTile.piece = undefined;

      if (fromPiece != move.piece) {
        move.piece = fromPiece;
      }
    }

    return fromPiece;
  }

  protected validate(move: Move) {
    if (move.to == undefined) {
      throw new Error('invalid move; nowhere to move.');
    }
    if (move.to && (move.to < 0 || move.to >= 64)) {
      throw new Error('Invalid location.');
    }
  }
}
