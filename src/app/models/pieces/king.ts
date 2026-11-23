import { Color } from "../../enums/color";
import { Piece } from "./piece";

export class King extends Piece {
  constructor(color: Color) {
    super(color, 'k')
  }

}
