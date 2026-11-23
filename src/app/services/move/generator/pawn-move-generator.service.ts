import { Injectable } from '@angular/core';
import { MoveGeneratorService } from './move-generator.service';
import { Pawn } from '../../models/pieces/pawn';
import { Tile } from '../../models/tile';

@Injectable({
  providedIn: 'root',
})
export class PawnMoveParserService extends MoveGeneratorService<Pawn> {

  constructor() {
    super(Pawn)
  }

  possibleNewPositions(
    currentPosition: number
  ): Array<number> {

    const pawn: Pawn = this.getValidPiece(board, currentPosition) as Pawn

    const possibleIndexes: Array<number> = [];

    let newPosition: number | undefined = currentPosition;

    for (let index = 0; index < 2; index++) {
      newPosition = moveUp.getNewPosition(newPosition, pawn.color);
      if (!newPosition) break;
      if (board[newPosition].piece) break;
      if (index === 2 && pawn.hasMoved) break;
      possibleIndexes.push(newPosition);
    }

    newPosition = moveDiagonalUpLeft.getNewPosition(pawn.position, pawn.color);
    if (
      newPosition &&
      board[newPosition].piece &&
      board[newPosition].piece?.color !== pawn.color
    ) {
      possibleIndexes.push(newPosition);
    }

    newPosition = moveDiagonalUpRight.getNewPosition(pawn.position, pawn.color);

    if (
      newPosition &&
      board[newPosition].piece &&
      board[newPosition].piece?.color !== pawn.color
    ) {
      possibleIndexes.push(newPosition);
    }

    return possibleIndexes;
  }
}
