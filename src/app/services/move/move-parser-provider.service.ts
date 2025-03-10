import { Injectable, Type } from '@angular/core';
import { PawnMoveParserService } from './pawn-move-parser.service';
import { BishopMoveParserService } from './bishop-move-parser.service';
import { MoveParserService } from './move-parser.service';
import { Piece } from '../../models/pieces/piece';
import { Pawn } from '../../models/pieces/pawn';
import { Bishop } from '../../models/pieces/bishop';

@Injectable({
  providedIn: 'root'
})
export class MoveParserProviderService {

  constructor(
    private _pawnMoveParser: PawnMoveParserService,
    private _bishopMoveParser: BishopMoveParserService,
  ) { }

  getMoveParserFor(piece: Piece): MoveParserService<Piece> {
    if (piece instanceof Pawn) {
      return this._pawnMoveParser;
    } else if (piece instanceof Bishop) {
      return this._bishopMoveParser;
    } else {
      throw new Error(`No move parser for ${piece?.manifest}`);
    }
  }
}
