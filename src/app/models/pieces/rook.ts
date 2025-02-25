import { Color } from "../../enums/color";
import { Piece } from "./piece";

export class Rook implements Piece {
  color: Color;
  manifest: string = "R"

  constructor(color: Color) {
    this.color = color;
  }
  getAssetName(): string {
    return `r${this.color == Color.dark ? 'd' : 'l'}t45.svg`;
  }
}
