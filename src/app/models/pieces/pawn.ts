import { Color } from '../../enums/color';
import { Piece } from './piece';

export class Pawn extends Piece {
  hasMoved = false;

  override get position(): number {
    return this._position;
  }

  override set position(newPosion: number) {
    this._position = newPosion;
    this.hasMoved = true;
  }

  constructor(color: Color, position: number) {
    super(color, position, 'p');
  }
}
