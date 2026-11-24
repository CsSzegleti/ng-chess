import { Injectable } from '@angular/core';
import { Color } from '../enums/color';
import { BoardUtils } from './board-utils';

export type AtomicMove = (position: number, color: Color) => number | undefined;

@Injectable({
  providedIn: 'root',
})
export class MoveHelper {
  moveUp: AtomicMove = (position: number, color: Color) => {
    if (BoardUtils.isOnOpponentBase(position, color)) return;
    return position + color * 8;
  };

  moveDiagonalUpLeft: AtomicMove = (position: number, color: Color) => {
    if (
      BoardUtils.isOnLeft(position, color) ||
      BoardUtils.isOnOpponentBase(position, color)
    )
      return;
    return position + color * 9;
  };

  moveDiagonalDownLeft: AtomicMove = (position: number, color: Color) => {
    if (
      BoardUtils.isOnLeft(position, color) ||
      BoardUtils.isOnHomeBase(position, color)
    )
      return;
    return position - color * 7;
  };

  moveDiagonalUpRight: AtomicMove = (position: number, color: Color) => {
    if (
      BoardUtils.isOnRight(position, color) ||
      BoardUtils.isOnOpponentBase(position, color)
    )
      return;
    return position + color * 7;
  };

  moveDiagonalDownRight: AtomicMove = (position: number, color: Color) => {
    if (
      BoardUtils.isOnRight(position, color) ||
      BoardUtils.isOnHomeBase(position, color)
    )
      return;
    return position - color * 9;
  };

  moveRight: AtomicMove = (position: number, color: Color) => {
    if (BoardUtils.isOnRight(position, color)) return;
    return position + color * 1;
  };

  moveLeft: AtomicMove = (position: number, color: Color) => {
    if (BoardUtils.isOnLeft(position, color)) return;
    return position - color * 1;
  };
}
