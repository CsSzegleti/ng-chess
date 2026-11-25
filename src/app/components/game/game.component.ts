import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Tile } from '../../models/tile';
import { Color } from '../../enums/color';
import { Bishop } from '../../models/pieces/bishop';
import { King } from '../../models/pieces/king';
import { Knight } from '../../models/pieces/knight';
import { Pawn } from '../../models/pieces/pawn';
import { Queen } from '../../models/pieces/queen';
import { Rook } from '../../models/pieces/rook';
import { BoardComponent } from '../board/board.component';
import { GameService } from '../../services/game.service';
import { MoveGeneratorProviderService } from '../../services/move/generator/move-generator-provider.service';
import { BoardInitializerService } from '../../services/board-initializer.service';
import { Board } from '../../models/board';

@Component({
  selector: 'app-game',
  imports: [BoardComponent],
  templateUrl: './game.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './game.component.scss',
})
export class GameComponent {
  gameService: GameService = inject(GameService);
  moveGeneratorProvider: MoveGeneratorProviderService = inject(
    MoveGeneratorProviderService,
  );
  boardInitializer: BoardInitializerService = inject(BoardInitializerService);
  protected board = inject(Board);

  constructor() {}

  highlightedTileIndex?: number = undefined;

  markedTileIndexes: Array<number> = [];

  onHighlightedTileChange(tileIndex: number) {
    const tile = this.board.tiles[tileIndex];
    if (this.highlightedTileIndex === tileIndex) {
      this.highlightedTileIndex = undefined;
      this.markedTileIndexes = [];
      return;
    }

    if (!tile.piece && !this.highlightedTileIndex) {
      return;
    }

    if (!this.highlightedTileIndex) {
      this.highlightedTileIndex = tileIndex;
      const highlightedPiece = this.tiles[this.highlightedTileIndex].piece;

      if (highlightedPiece) {
        this.markedTileIndexes = this.moveGeneratorProvider
          .getMoveParserFor(highlightedPiece)
          .possibleNewPositions(this.tiles, this.highlightedTileIndex).map((move) => move.to).filter((move) => move.to)
      }
      return;
    }

    this.movePiece(this.highlightedTileIndex, tileIndex);
    this.highlightedTileIndex = undefined;
    this.markedTileIndexes = [];
  }

  private movePiece(fromIndex: number, toIndex: number) {
    let fromTile = this.tiles[fromIndex];
    let toTile = this.tiles[toIndex];

    if (!fromTile.piece) {
      return;
    }

    toTile.piece = fromTile.piece;
    toTile.piece.position = toIndex;
    fromTile.piece = undefined;
  }
}
