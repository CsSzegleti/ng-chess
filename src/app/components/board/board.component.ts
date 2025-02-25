import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TileComponent } from "../tile/tile.component";
import { Tile } from '../../models/tile';
import { Rook } from '../../models/pieces/rook';
import { Color } from '../../enums/color';
import { Pawn } from '../../models/pieces/pawn';
import { Knight } from '../../models/pieces/knight';
import { Bishop } from '../../models/pieces/bishop';
import { King } from '../../models/pieces/king';
import { Queen } from '../../models/pieces/queen';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  imports: [TileComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  @Input() highlightedTileIdx?: number
  @Output() highligtedTileIdxChange: EventEmitter<number> = new EventEmitter();

  @Input() tiles: Array<Tile> = new Array(
    new Tile(new Rook(Color.dark)), new Tile(new Knight(Color.dark)), new Tile(new Bishop(Color.dark)), new Tile(new Queen(Color.dark)), new Tile(new King(Color.dark)), new Tile(new Bishop(Color.dark)), new Tile(new Knight(Color.dark)), new Tile(new Rook(Color.dark)),
    new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)), new Tile(new Pawn(Color.dark)),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)), new Tile(new Pawn(Color.light)),
    new Tile(new Rook(Color.light)), new Tile(new Knight(Color.light)), new Tile(new Bishop(Color.light)), new Tile(new Queen(Color.light)), new Tile(new King(Color.light)), new Tile(new Bishop(Color.light)), new Tile(new Knight(Color.light)), new Tile(new Rook(Color.light)),
  )


  calculateBackground(i: number): string {
    debugger;
    if (i == this.highlightedTileIdx) {
      return 'highlighted'
    }

    let rowNum = Math.floor(i / 8);

    if (rowNum % 2 == 0) {
      return i % 2 == 0 ? 'light' : 'dark';
    } else {
      return i % 2 == 0 ? 'dark' : 'light';
    }
  }
}
