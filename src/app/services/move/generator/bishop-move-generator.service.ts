import { Injectable } from '@angular/core';
import { MoveGeneratorService } from './move-generator.service';
import { Tile } from '../../models/tile';
import { Bishop } from '../../models/pieces/bishop';

@Injectable({
  providedIn: 'root',
})
export class BishopMoveGeneratorService extends MoveGeneratorService<Bishop> {
  constructor() {
    super(Bishop);
  }

  possibleNewPositions(
    board: Array<Tile>,
    currentPosition: number
  ): Array<number> {
    const bishop: Bishop = this.getValidPiece(board, currentPosition) as Bishop;

    let possibleIndexes: Array<number> = [];

    possibleIndexes = possibleIndexes.concat(
      this.moveInRow(board, moveDiagonalUpLeft, currentPosition, bishop.color)
    );

    possibleIndexes = possibleIndexes.concat(
      this.moveInRow(board, moveDiagonalUpRight, currentPosition, bishop.color)
    );

    possibleIndexes = possibleIndexes.concat(
      this.moveInRow(board, moveDiagonalDownRight, currentPosition, bishop.color)
    );

    possibleIndexes = possibleIndexes.concat(
      this.moveInRow(board, moveDiagonalDownLeft, currentPosition, bishop.color)
    );
    return possibleIndexes;
  }
}
