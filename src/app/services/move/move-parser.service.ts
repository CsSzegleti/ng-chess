import { Tile } from '../../models/tile';
import { Piece } from '../../models/pieces/piece';
import { Pawn } from '../../models/pieces/pawn';
import { Color } from '../../enums/color';
import { Move } from '../../models/move';

export abstract class MoveParserService<P extends Piece> {
  constructor(private pieceType: new (color: Color, position: number) => P) {}

  abstract possibleNewPosition(
    board: Array<Tile>,
    currentPosition: number
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
