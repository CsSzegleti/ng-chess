import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color } from '../../enums/color';

@Component({
  selector: 'app-tile',
  imports: [CommonModule],
  templateUrl: './tile.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './tile.component.scss',
})
export class TileComponent {
  @Input() color!: string;
  @Input() isMarked: boolean = false;
}
