import { Color } from "../../enums/color";
import { Piece } from "./piece";

export class Knight extends Piece {
  constructor(color: Color, position: number) {
    super(color, position, 'n')
  }
}
