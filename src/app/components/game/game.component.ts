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
    new Tile(new Rook(Color.dark)), new Tile(new Knight(Color.dark)), new Tile(new Bishop(Color.dark)), new Tile(new Queen(Color.dark)), new Tile(new King(Color.dark)), new Tile(new Bishop(Color.dark)), new Tile(new Knight(Color.dark)), new Tile(new Rook(Color.dark)),
    new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)),
    new Tile(new Rook(Color.light)), new Tile(new Knight(Color.light)), new Tile(new Bishop(Color.light)), new Tile(new Queen(Color.light)), new Tile(new King(Color.light)), new Tile(new Bishop(Color.light)), new Tile(new Knight(Color.light)), new Tile(new Rook(Color.light)),
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
