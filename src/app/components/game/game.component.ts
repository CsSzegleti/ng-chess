import { Component } from '@angular/core';
import { Tile } from '../../models/tile';
import { Color } from '../../enums/color';
import { Bishop } from '../../models/pieces/bishop';
import { King } from '../../models/pieces/king';
import { Knight } from '../../models/pieces/knight';
import { Pawn } from '../../models/pieces/pawn';
import { Queen } from '../../models/pieces/queen';
import { Rook } from '../../models/pieces/rook';
import { BoardComponent } from "../board/board.component";

@Component({
  selector: 'app-game',
  imports: [BoardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  tiles: Array<Tile> = new Array(
    new Tile(new Rook(Color.dark, 0)), new Tile(new Knight(Color.dark, 1)), new Tile(new Bishop(Color.dark, 2)), new Tile(new Queen(Color.dark, 3)), new Tile(new King(Color.dark, 4)), new Tile(new Bishop(Color.dark, 5)), new Tile(new Knight(Color.dark, 6)), new Tile(new Rook(Color.dark, 7)),
    new Tile(new Pawn(Color.dark, 8)), new Tile(new Pawn(Color.dark, 9)), new Tile(new Pawn(Color.dark, 10)), new Tile(new Pawn(Color.dark, 11)), new Tile(new Pawn(Color.dark, 12)), new Tile(new Pawn(Color.dark, 13)), new Tile(new Pawn(Color.dark, 14)), new Tile(new Pawn(Color.dark, 15)),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(new Pawn(Color.light, 48)), new Tile(new Pawn(Color.light, 49)), new Tile(new Pawn(Color.light, 50)), new Tile(new Pawn(Color.light, 51)), new Tile(new Pawn(Color.light, 52)), new Tile(new Pawn(Color.light, 53)), new Tile(new Pawn(Color.light, 54)), new Tile(new Pawn(Color.light, 55)),
    new Tile(new Rook(Color.light, 56)), new Tile(new Knight(Color.light, 57)), new Tile(new Bishop(Color.light, 58)), new Tile(new Queen(Color.light, 59)), new Tile(new King(Color.light, 60)), new Tile(new Bishop(Color.light, 61)), new Tile(new Knight(Color.light, 62)), new Tile(new Rook(Color.light, 63)),
  );

  highlightedTileIndex?: number = undefined;

  onHighlightedTileChange(tileIndex: number) {
    if (this.highlightedTileIndex === tileIndex) {
      this.highlightedTileIndex = undefined;
      return;
    }

    if (!this.tiles[tileIndex].piece && !this.highlightedTileIndex) {
      return;
    }

    if (!this.highlightedTileIndex) {
      this.highlightedTileIndex = tileIndex;
      return;
    }

    this.movePiece(this.highlightedTileIndex, tileIndex);
    this.highlightedTileIndex = undefined
  }

  private movePiece(fromIndex: number, toIndex: number) {
    this.tiles[toIndex].piece = this.tiles[fromIndex].piece
    this.tiles[fromIndex].piece = undefined
  }
}
