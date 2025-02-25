import { Color } from "../../enums/color";
import { Piece } from "./piece";

export class Pawn implements Piece {
  color: Color;
  manifest: string = 'P';

  constructor(color: Color) {
    this.color = color;
  }
  getAssetName(): string {
    return `p${this.color == Color.dark ? 'd' : 'l'}t45.svg`;
  }
}
