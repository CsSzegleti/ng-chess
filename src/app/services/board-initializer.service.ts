import { Service } from '@angular/core';
import { inject } from '@angular/core';
import { Board } from '../models/board';
import { Move } from '../models/move';
import { Rook } from '../models/pieces/rook';
import { Color } from '../enums/color';
import { MoveExecutorService } from './move/executor/move-executor.service';
import { Knight } from '../models/pieces/knight';
import { Bishop } from '../models/pieces/bishop';
import { Queen } from '../models/pieces/queen';
import { King } from '../models/pieces/king';
import { Pawn } from '../models/pieces/pawn';

@Service()
export class BoardInitializerService {
  private board = inject(Board);
  private moveExecutor = inject(MoveExecutorService);
  private moves: Array<Move> = [
    new Move(undefined, 0, new Rook(Color.dark)),
    new Move(undefined, 1, new Knight(Color.dark)),
    new Move(undefined, 2, new Bishop(Color.dark)),
    new Move(undefined, 3, new Queen(Color.dark)),
    new Move(undefined, 4, new King(Color.dark)),
    new Move(undefined, 5, new Bishop(Color.dark)),
    new Move(undefined, 6, new Knight(Color.dark)),
    new Move(undefined, 7, new Rook(Color.dark)),
    new Move(undefined, 8, new Pawn(Color.dark)),
    new Move(undefined, 9, new Pawn(Color.dark)),
    new Move(undefined, 10, new Pawn(Color.dark)),
    new Move(undefined, 11, new Pawn(Color.dark)),
    new Move(undefined, 12, new Pawn(Color.dark)),
    new Move(undefined, 13, new Pawn(Color.dark)),
    new Move(undefined, 14, new Pawn(Color.dark)),
    new Move(undefined, 15, new Pawn(Color.dark)),
    new Move(undefined, 48, new Pawn(Color.light)),
    new Move(undefined, 49, new Pawn(Color.light)),
    new Move(undefined, 50, new Pawn(Color.light)),
    new Move(undefined, 51, new Pawn(Color.light)),
    new Move(undefined, 52, new Pawn(Color.light)),
    new Move(undefined, 53, new Pawn(Color.light)),
    new Move(undefined, 54, new Pawn(Color.light)),
    new Move(undefined, 55, new Pawn(Color.light)),
    new Move(undefined, 56, new Rook(Color.light)),
    new Move(undefined, 57, new Knight(Color.light)),
    new Move(undefined, 58, new Bishop(Color.light)),
    new Move(undefined, 59, new Queen(Color.light)),
    new Move(undefined, 60, new King(Color.light)),
    new Move(undefined, 61, new Bishop(Color.light)),
    new Move(undefined, 62, new Knight(Color.light)),
    new Move(undefined, 63, new Rook(Color.light)),
  ];

  init() {
    this.resetBoard();
    for (const move of this.moves) {
      this.moveExecutor.execute(move);
    }
  }

  private resetBoard() {
    this.board.capturedPieces = [];
    this.board.tiles.forEach((tile) => (tile.piece = undefined));
  }
}
