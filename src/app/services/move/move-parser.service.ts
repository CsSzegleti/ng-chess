import { Tile } from '../../models/tile';
import { Piece } from '../../models/pieces/piece';


export interface MoveParserService<P extends Piece> {
  possibleNewPosition(board: Array<Tile>, piece: P): Array<number>;
}
