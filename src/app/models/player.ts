import { Color } from '../enums/color';
import { Bishop } from './pieces/bishop';
import { King } from './pieces/king';
import { Knight } from './pieces/knight';
import { Pawn } from './pieces/pawn';
import { Piece } from './pieces/piece';
import { Queen } from './pieces/queen';
import { Rook } from './pieces/rook';

export class Player {
  capturedPieces: Array<Piece> = [];
  pieces: Array<Piece>;

  constructor(private color: Color) {
    this.pieces = [
      new Rook(color),
      new Knight(color),
      new Bishop(color),
      new Queen(color),
      new King(color),
      new Bishop(color),
      new Knight(color),
      new Rook(color),
      new Pawn(color),
      new Pawn(color),
      new Pawn(color),
      new Pawn(color),
      new Pawn(color),
      new Pawn(color),
      new Pawn(color),
      new Pawn(color),
    ];
  }
}
