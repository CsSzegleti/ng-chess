import { Color } from '../../enums/color';
import { Piece } from './piece';

export class Queen extends Piece {
  constructor(color: Color) {
    super(color, 'q');
  }
}
