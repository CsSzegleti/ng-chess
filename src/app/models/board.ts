import { Color } from '../enums/color';
import { Bishop } from './pieces/bishop';
import { King } from './pieces/king';
import { Knight } from './pieces/knight';
import { Pawn } from './pieces/pawn';
import { Piece } from './pieces/piece';
import { Queen } from './pieces/queen';
import { Rook } from './pieces/rook';
import { Tile } from './tile';

function initemptyBoard(): Array<Tile> {
  // prettier-ignore
  return new Array(
    new Tile(new Rook(Color.dark, 0)), new Tile(new Knight(Color.dark, 1)), new Tile(new Bishop(Color.dark, 2)), new Tile(new Queen(Color.dark, 3)), new Tile(new King(Color.dark, 4)), new Tile(new Bishop(Color.dark, 5)), new Tile(new Knight(Color.dark, 6)), new Tile(new Rook(Color.dark, 7)),
    new Tile(new Pawn(Color.dark, 8)), new Tile(new Pawn(Color.dark, 9)), new Tile(new Pawn(Color.dark, 10)), new Tile(new Pawn(Color.dark, 11)), new Tile(new Pawn(Color.dark, 12)), new Tile(new Pawn(Color.dark, 13)), new Tile(new Pawn(Color.dark, 14)), new Tile(new Pawn(Color.dark, 15)),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(new Pawn(Color.light, 48)), new Tile(new Pawn(Color.light, 49)), new Tile(new Pawn(Color.light, 50)), new Tile(new Pawn(Color.light, 51)), new Tile(new Pawn(Color.light, 52)), new Tile(new Pawn(Color.light, 53)), new Tile(new Pawn(Color.light, 54)), new Tile(new Pawn(Color.light, 55)),
    new Tile(new Rook(Color.light, 56)), new Tile(new Knight(Color.light, 57)), new Tile(new Bishop(Color.light, 58)), new Tile(new Queen(Color.light, 59)), new Tile(new King(Color.light, 60)), new Tile(new Bishop(Color.light, 61)), new Tile(new Knight(Color.light, 62)), new Tile(new Rook(Color.light, 63)),
  );
}

function initPieces(): Array<Piece> {
  // prettier-ignore
  return new Array(
    new Rook(Color.dark, 0), new Knight(Color.dark, 1), new Bishop(Color.dark, 2), new Queen(Color.dark, 3), new King(Color.dark, 4), new Bishop(Color.dark, 5), new Knight(Color.dark, 6), new Rook(Color.dark, 7),
    new Pawn(Color.dark, 8), new Pawn(Color.dark, 9), new Pawn(Color.dark, 10), new Pawn(Color.dark, 11), new Pawn(Color.dark, 12), new Pawn(Color.dark, 13), new Pawn(Color.dark, 14), new Pawn(Color.dark, 15),
    new Pawn(Color.light, 48), new Pawn(Color.light, 49), new Pawn(Color.light, 50), new Pawn(Color.light, 51), new Pawn(Color.light, 52), new Pawn(Color.light, 53), new Pawn(Color.light, 54), new Pawn(Color.light, 55),
    new Rook(Color.light, 56), new Knight(Color.light, 57), new Bishop(Color.light, 58), new Queen(Color.light, 59), new King(Color.light, 60), new Bishop(Color.light, 61), new Knight(Color.light, 62), new Rook(Color.light, 63),
  );
}

function initSetBoard(): Array<Tile> {
  // prettier-ignore
  return new Array(
    new Tile(new Rook(Color.dark, 0)), new Tile(new Knight(Color.dark, 1)), new Tile(new Bishop(Color.dark, 2)), new Tile(new Queen(Color.dark, 3)), new Tile(new King(Color.dark, 4)), new Tile(new Bishop(Color.dark, 5)), new Tile(new Knight(Color.dark, 6)), new Tile(new Rook(Color.dark, 7)),
    new Tile(new Pawn(Color.dark, 8)), new Tile(new Pawn(Color.dark, 9)), new Tile(new Pawn(Color.dark, 10)), new Tile(new Pawn(Color.dark, 11)), new Tile(new Pawn(Color.dark, 12)), new Tile(new Pawn(Color.dark, 13)), new Tile(new Pawn(Color.dark, 14)), new Tile(new Pawn(Color.dark, 15)),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(new Pawn(Color.light, 48)), new Tile(new Pawn(Color.light, 49)), new Tile(new Pawn(Color.light, 50)), new Tile(new Pawn(Color.light, 51)), new Tile(new Pawn(Color.light, 52)), new Tile(new Pawn(Color.light, 53)), new Tile(new Pawn(Color.light, 54)), new Tile(new Pawn(Color.light, 55)),
    new Tile(new Rook(Color.light, 56)), new Tile(new Knight(Color.light, 57)), new Tile(new Bishop(Color.light, 58)), new Tile(new Queen(Color.light, 59)), new Tile(new King(Color.light, 60)), new Tile(new Bishop(Color.light, 61)), new Tile(new Knight(Color.light, 62)), new Tile(new Rook(Color.light, 63)),
  );
}

export class Board {
  // pieces: Array<Piece>;
  tiles: Array<Tile>;

  constructor(_tiles?: Array<Tile>) {
    if (!_tiles) {
      this.tiles = initSetBoard();
    } else {
      if (_tiles.length != 64) {
        throw new Error('Invalid number of tiles.');
      } else {
        this.tiles = _tiles;
      }
    }
  }

  move(piece: Piece, newLocation: number) {
    if (newLocation < 0 || newLocation >= 64) {
      throw new Error('Invalid location.');
    }

    let fromTile = this.tiles[piece.position];
    let toTile = this.tiles[newLocation];

    if (!fromTile.piece) {
      throw new Error('Board and piece position are not in sync');
    }

    toTile.piece = fromTile.piece;
    toTile.piece.position = newLocation;
    fromTile.piece = undefined
  }

  reset() {
    this.tiles = initSetBoard();
  }
}
