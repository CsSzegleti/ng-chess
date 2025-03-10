import { Color } from '../enums/color';

export function isOnRight(position: number, color: Color): boolean {
  return color === Color.light
    ? position % 8 === 7
    : position % 7 === 0;
}

export function isOnLeft(position: number, color: Color): boolean {
  return color === Color.light
    ? position % 8 === 0
    : position % 8 === 7;
}

export function isOnOpponentBase(position: number, color: Color) {
  return color === Color.light
    ? Math.floor(position / 8) === 0
    : Math.floor(position / 8) === 7;
}

export function isOnHomeBase(position: number, color: Color) {
  return color === Color.light
    ? Math.floor(position / 8) === 7
    : Math.floor(position / 8) === 0;
}
