import { Color } from "../../enums/color";
import { Piece } from "./piece";

export class Knight implements Piece {
  color: Color;
  manifest: string = "P"

  constructor(color: Color) {
    this.color = color;
  }
  getAssetName(): string {
    return `n${this.color == Color.dark ? 'd' : 'l'}t45.svg`;
  }
}
