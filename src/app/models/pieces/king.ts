import { Color } from "../../enums/color";
import { Piece } from "./piece";

export class King extends Piece {
  constructor(color: Color, position: number) {
    super(color, position, 'k')
  }

  hasMoved = true;
}
