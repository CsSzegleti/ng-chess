import { Color } from '../../enums/color';
import { Piece } from './piece';

export class Pawn extends Piece {
  isUntouched = true;

  override get position(): number {
    return this._position;
  }

  override set position(newPosion: number) {
    this._position = newPosion;
    this.isUntouched = false;
  }

  constructor(color: Color, position: number) {
    super(color, position, 'p');
  }
}
