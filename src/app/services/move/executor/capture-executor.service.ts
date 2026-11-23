import { Service } from '@angular/core';
import { inject } from '@angular/core';
import { DARK_PLAYER, LIGHT_PLAYER } from '../../../app.config';
import { MoveExecutorService } from './move-executor.service';
import { Move } from '../../../models/move';
import { Color } from '../../../enums/color';

@Service()
export class CaptureExecutorService extends MoveExecutorService {
  private lightPlayer = inject(LIGHT_PLAYER);
  private darkPlayer = inject(DARK_PLAYER);

  override execute(move: Move): void {
    const fromTile = this.board.tiles[move.from];
    const fromPiece = fromTile.piece;
    const capturingPlayer =
      move.piece.color === Color.dark ? this.lightPlayer : this.darkPlayer;

    if (!fromPiece) return;

    capturingPlayer.capturedPieces.push(fromPiece);
    fromTile.piece = undefined;
  }

  override undo(move: Move): void {
    const capturingPlayer =
      move.piece.color === Color.dark ? this.lightPlayer : this.darkPlayer;
    const fromTile = this.board.tiles[move.from];
    const fromPiece = capturingPlayer.pieces.pop();

    fromTile.piece = fromPiece;
  }

  protected override validate(move: Move): void {
    if (move.to != undefined) {
      throw new Error('Invalid location.');
    }
  }
}
