import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { TileComponent } from "../tile/tile.component";
import { Tile } from '../../models/tile';


@Component({
  selector: 'app-board',
  imports: [TileComponent],
  templateUrl: './board.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  @Input() highlightedTileIdx?: number
  @Output() highligtedTileIdxChange: EventEmitter<number> = new EventEmitter();

  @Input() tiles: Array<Tile> = new Array(
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
    new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(),
  )

  @Input() markedTiles: Array<number> = []

  calculateBackground(i: number): string {
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
