import { Injectable } from '@angular/core';
import { Color } from '../enums/color';
import { BoardUtils } from './board-utils';

@Injectable({
  providedIn: 'root',
})
export class MoveHelper {
  moveUp = (position: number, color: Color) => {
    if (BoardUtils.isOnOpponentBase(position, color)) return;
    return position + color * 8;
  };

  moveDiagonalUpLeft = (position: number, color: Color) => {
    if (BoardUtils.isOnLeft(position, color) || BoardUtils.isOnOpponentBase(position, color)) return;
    return position + color * 9;
  };

  moveDiagonalDownLeft = (position: number, color: Color) => {
    if (BoardUtils.isOnLeft(position, color) || BoardUtils.isOnHomeBase(position, color)) return;
    return position - color * 7;
  };

  moveDiagonalUpRight = (position: number, color: Color) => {
    if (BoardUtils.isOnRight(position, color) || BoardUtils.isOnOpponentBase(position, color)) return;
    return position + color * 7;
  };

  moveDiagonalDownRight = (position: number, color: Color) => {
    if (BoardUtils.isOnRight(position, color) || BoardUtils.isOnHomeBase(position, color)) return;
    return position - color * 9;
  };

  moveRight = (position: number, color: Color) => {
    if (BoardUtils.isOnRight(position, color)) return;
    return position + color * 1;
  };

  moveLeft = (position: number, color: Color) => {
    if (BoardUtils.isOnLeft(position, color)) return;
    return position - color * 1;
  };
}
