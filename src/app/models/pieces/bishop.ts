import { Color } from "../../enums/color";
import { Piece } from "./piece";

export class Bishop implements Piece {
  color: Color;
  manifest: string = "B"

  constructor(color: Color) {
    this.color = color;
  }
  getAssetName(): string {
    return `b${this.color == Color.dark ? 'd' : 'l'}t45.svg`;  }
}
