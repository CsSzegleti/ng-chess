import { Color } from "../../enums/color";
import { Piece } from "./piece";

export class Queen implements Piece {
  color: Color;
  manifest: string = "Q"

  constructor(color: Color) {
    this.color = color;
  }
  getAssetName(): string {
    return `q${this.color == Color.dark ? 'd' : 'l'}t45.svg`;
  }
}
