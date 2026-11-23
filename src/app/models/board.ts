import { Tile } from './tile';

export class Board {
  tiles: Array<Tile>;

  constructor(_tiles: Array<Tile>) {
    if (_tiles.length != 64) throw new Error('Invalid number of tiles.');

    this.tiles = _tiles;
  }
}
