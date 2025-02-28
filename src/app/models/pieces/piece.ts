import { Color } from "../../enums/color";

export abstract class Piece {
  constructor(public color: Color, public position: number, public manifest: string) {}

  getAssetName(): string {
    return `${this.manifest}${this.color == Color.dark ? 'd' : 'l'}t45.svg`;
  }
}
