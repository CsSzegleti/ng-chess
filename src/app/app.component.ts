import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from "./components/board/board.component";
import { CommonModule } from '@angular/common';
import { GameComponent } from "./components/game/game.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
[x: string]: any;
  title = 'ng-chess';
}
