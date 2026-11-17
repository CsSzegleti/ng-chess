import { Color } from "../../enums/color";

export abstract class Piece {

  hasMoved = false;

  public get position(): number {
    return this._position;
  }

  public set position(value: number) {
    this._position = value;
  }

  constructor(public color: Color, protected _position: number, public manifest: string) {}

  getAssetName(): string {
    return `${this.manifest}${this.color == Color.dark ? 'd' : 'l'}t45.svg`;
  }
}
