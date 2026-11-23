import { BoardUtils } from '../util/board-utils';
import { Piece } from './pieces/piece';

export class Move {
  other?: Move;

  constructor(
    public from: number,
    public to: number,
    public piece: Piece,
  ) {}

  toUCI() {
    return `${BoardUtils.getFile(this.from)}${BoardUtils.getRank(this.from)}${BoardUtils.getFile(this.to)}${BoardUtils.getRank(this.to)}`;
  }
}
