import { Color } from "../../enums/color";

export interface Piece {
  color: Color;
  manifest: string;

  getAssetName(): string
}
