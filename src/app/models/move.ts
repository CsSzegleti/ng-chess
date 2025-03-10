import { Color } from "../enums/color"
import { isOnLeft, isOnRight, isOnOpponentBase, isOnHomeBase } from "../services/board-utils";

export interface Move {
    getNewPosition: (position: number, color: Color) => number | undefined;
};

export const moveUp: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnOpponentBase(position, color)) return;

    return position + color * 8
  }
};

export const moveDiagonalUpLeft: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnLeft(position, color) || isOnOpponentBase(position, color)) return;

    return position + color * 9;
  },
};

export const moveDiagonalDownLeft: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnLeft(position, color) || isOnHomeBase(position, color)) return;

    return position - color * 7;
  },
};

export const moveDiagonalUpRight: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnRight(position, color) || isOnOpponentBase(position, color)) return;

    return position + color * 7;
  },
};

export const moveDiagonalDownRight: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnRight(position, color) || isOnHomeBase(position, color)) return;

    return position - color * 9;
  },
};

export const moveRight: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnRight(position, color)) return;

    return position + color * 1;
  },
}


export const moveLeft: Move = {
  getNewPosition: (position: number, color: Color) => {
    if (isOnLeft(position, color)) return;
    return position - color * 1;
  },
};
