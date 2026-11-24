import { Injectable } from '@angular/core';
import { PawnMoveParserService } from './pawn-move-generator.service';
import { BishopMoveGeneratorService } from './bishop-move-generator.service';
import { MoveGeneratorService } from './move-generator.service';
import { Piece } from '../../../models/pieces/piece';
import { Pawn } from '../../../models/pieces/pawn';
import { Bishop } from '../../../models/pieces/bishop';

@Injectable({
  providedIn: 'root'
})
export class MoveGeneratorProviderService {

  constructor(
    private _pawnMoveParser: PawnMoveParserService,
    private _bishopMoveParser: BishopMoveGeneratorService,
  ) { }

  getMoveParserFor(piece: Piece): MoveGeneratorService<Piece> {
    if (piece instanceof Pawn) {
      return this._pawnMoveParser;
    } else if (piece instanceof Bishop) {
      return this._bishopMoveParser;
    } else {
      throw new Error(`No move parser for ${piece?.manifest}`);
    }
  }
}
