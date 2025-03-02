import { Color } from "../enums/color"
import { isOnLeft, isOnRight, isOnUpperBase } from "../services/board-utils";

export interface Move {
    getNewPosition: (position: number, color: Color) => number | undefined;
};

export const moveUp: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnUpperBase(position)) return;

    return position + color * 8
  }
};

export const moveDiagonalUpLeft: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnLeft(position) || isOnUpperBase(position)) return;

    return position + color * 9;
  },
};

export const moveDiagonalUpRight: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnRight(position) || isOnUpperBase(position)) return;

    return position + color * 7;
  },
};

export const moveRight: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnRight(position)) return;

    return position + color * 1;
  },
}


export const moveLeft: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnLeft(position)) return;
    return position - color * 1;
  },
};
