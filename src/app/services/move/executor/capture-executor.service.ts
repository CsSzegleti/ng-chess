import { Service } from '@angular/core';
import { MoveExecutorService } from './move-executor.service';
import { Move } from '../../../models/move';

@Service()
export class CaptureExecutorService extends MoveExecutorService {

  override execute(move: Move): void {
    this.validate(move);
    const fromPiece = this.fromPieceToHand(move);
    if (!fromPiece) return;

    this.board.capturedPieces.push(fromPiece);
  }

  override undo(move: Move): void {
    const fromTile = this.board.tiles[move.from!];
    const fromPiece = this.board.capturedPieces.pop();

    fromTile.piece = fromPiece;
  }

  protected override validate(move: Move): void {
    if (move.from == undefined) {
      throw new Error('No from location')
    }
    if (move.to != undefined) {
      throw new Error('Invalid capture move.');
    }
  }
}
