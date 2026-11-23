import { Tile } from '../../../models/tile';
import { Piece } from '../../../models/pieces/piece';
import { Color } from '../../../enums/color';
import { Move } from '../../../models/move';
import { BOARD_TOKEN } from '../../../app.config';
import { inject } from '@angular/core';

export abstract class MoveGeneratorService<P extends Piece> {

  private board = inject(BOARD_TOKEN)

  constructor(private pieceType: new (color: Color, position: number) => P) {}

  abstract possibleNewPositions(
  ): Array<number>;

  getValidPiece(board: Array<Tile>, currentPosition: number): Piece {
    const piece = this.getPiece(board, currentPosition);
    if (!this.isValidPiece(piece)) {
      throw new Error('Not the expected piece!');
    }

    return piece;
  }

  private getPiece(board: Array<Tile>, currentPosition: number): Piece {
    const piece = board[currentPosition].piece;

    if (!piece) {
      throw new Error('There is no piece on that location!');
    }

    return piece;
  }

  moveInRow(board: Array<Tile>, move: Move, currentPosition: number, color: Color) {
    let newPosition: number | undefined = currentPosition;
    let possibleIndexes = new Array<number>();

    do {
      newPosition = move.getNewPosition(newPosition, color);
      if (!newPosition) break;
      if (board[newPosition].piece?.color === color) break;

      possibleIndexes.push(newPosition);

    } while(!board[newPosition].piece);

    return possibleIndexes;
  }

  private isValidPiece(piece: Piece): boolean {
    return piece instanceof this.pieceType;
  }
}
