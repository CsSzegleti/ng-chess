import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
  ModelSignal,
  model,
  input,
  inject,
  output,
} from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { Tile } from '../../models/tile';
import { Board } from '../../models/board';

@Component({
  selector: 'app-board',
  imports: [TileComponent],
  templateUrl: './board.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  highlightedTileIdx = input<number | undefined>();
  markedTiles = input<Array<number>>([]);

  highligtedTileIdxChange = output<number>();

  calculateBackground(i: number): string {
    if (i === this.highlightedTileIdx()) {
      return 'highlighted';
    }

    let rowNum = Math.floor(i / 8);

    if (rowNum % 2 == 0) {
      return i % 2 == 0 ? 'light' : 'dark';
    } else {
      return i % 2 == 0 ? 'dark' : 'light';
    }
  }
}
