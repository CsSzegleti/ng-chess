import { Color } from '../enums/color';

export class BoardUtils {
  private static files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  private static ranks = [1, 2, 3, 4, 5, 6, 7, 8];

  static isOnRight(position: number, color: Color): boolean {
    return color === Color.light ? position % 8 === 7 : position % 7 === 0;
  }

  static isOnLeft(position: number, color: Color): boolean {
    return color === Color.light ? position % 8 === 0 : position % 8 === 7;
  }

  static isOnOpponentBase(position: number, color: Color) {
    return color === Color.light
      ? Math.floor(position / 8) === 0
      : Math.floor(position / 8) === 7;
  }

  static isOnHomeBase(position: number, color: Color) {
    return color === Color.light
      ? Math.floor(position / 8) === 7
      : Math.floor(position / 8) === 0;
  }

  static getFile(idx: number) {
    return BoardUtils.files[idx % 8];
  }

  static getRank(idx: number) {
    return BoardUtils.ranks[Math.floor(idx / 8)];
  }
}
