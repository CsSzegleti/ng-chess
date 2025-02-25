import { Color } from "../../enums/color";
import { Piece } from "./piece";

export class King implements Piece {
  color: Color;
  manifest: string = "K"

  constructor(color: Color) {
    this.color = color
  }
  getAssetName(): string {
    return `k${this.color == Color.dark ? 'd' : 'l'}t45.svg`;
  }
}
