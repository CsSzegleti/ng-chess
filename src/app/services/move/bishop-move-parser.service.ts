import { Injectable } from '@angular/core';
import { MoveParserService } from './move-parser.service';
import { Pawn } from '../../models/pieces/pawn';
import { Tile } from '../../models/tile';
import { Bishop } from '../../models/pieces/bishop';
import { moveDiagonalDownLeft, moveDiagonalDownRight, moveDiagonalUpLeft, moveDiagonalUpRight } from '../../models/move';

@Injectable({
  providedIn: 'root',
})
export class BishopMoveParserService extends MoveParserService<Bishop> {
  constructor() {
    super(Bishop);
  }

  possibleNewPosition(
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
