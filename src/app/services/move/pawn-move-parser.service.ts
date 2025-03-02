import { Injectable } from '@angular/core';
import { MoveParserService } from './move-parser.service';
import { Pawn } from '../../models/pieces/pawn';
import { Tile } from '../../models/tile';
import {
  moveDiagonalUpLeft,
  moveDiagonalUpRight,
  moveUp,
} from '../../models/move';

@Injectable({
  providedIn: 'root',
})
export class PawnMoveParserService implements MoveParserService<Pawn> {
  possibleNewPosition(
    board: Array<Tile>,
    pawn: Pawn
  ): Array<number> {
    const possibleIndexes: Array<number> = [];

    if (!pawn) {
      return possibleIndexes;
    }

    let newPosition = moveUp.getNewPosition(pawn.position, pawn.color);

    if (!board[newPosition].piece) {
      possibleIndexes.push(newPosition);
    }
    if (!pawn.hasMoved) {
      newPosition = moveUp.getNewPosition(newPosition, pawn.color);
      if (!board[newPosition].piece) {
        possibleIndexes.push(newPosition);
      }
    }

    if (pawn.position % 8 !== 0) {
      newPosition = moveDiagonalUpLeft.getNewPosition(
        pawn.position,
        pawn.color
      );
      if (
        board[newPosition].piece &&
        board[newPosition].piece?.color !== pawn.color
      ) {
        possibleIndexes.push(newPosition);
      }
    }

    newPosition = moveDiagonalUpRight.getNewPosition(pawn.position, pawn.color);
    if (
      board[newPosition].piece &&
      board[newPosition].piece?.color !== pawn.color
    ) {
      possibleIndexes.push(newPosition);
    }

    return possibleIndexes;
  }
}
