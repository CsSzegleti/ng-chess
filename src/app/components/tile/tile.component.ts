import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color } from '../../enums/color';

@Component({
  selector: 'app-tile',
  imports: [CommonModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
})
export class TileComponent {
  @Input() color!: string;
}
