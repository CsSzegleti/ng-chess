import { Color } from '../../enums/color';
import { Piece } from './piece';

export class Pawn extends Piece {
  constructor(color: Color) {
    super(color, 'p');
  }
}
