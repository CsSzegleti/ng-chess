import { Piece } from "./pieces/piece";

export class Tile {
  piece?: Piece

  constructor(piece?: Piece) {
    this.piece = piece
  }

}
