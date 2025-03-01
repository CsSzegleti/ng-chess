import { Color } from "../enums/color"

export interface Move {
    getNewPosition: (position: number, color: Color) => number
};

export const moveUp: Move = {
  getNewPosition: (position: number, color: Color) => {
    return color === Color.light ? position - 8 : position + 8
  }
};

export const moveDiagonalUpLeft: Move = {
  getNewPosition: (position: number, color: Color) => {
    return color === Color.light ? position - 9 : position + 9;
  },
};

export const moveDiagonalUpRight: Move = {
  getNewPosition: (position: number, color: Color) => {
    return color === Color.light ? position - 7 : position + 7;
  },
};
