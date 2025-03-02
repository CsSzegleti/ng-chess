export function isOnRight(position: number): boolean {
  return position % 8 === 7;
}

export function isOnLeft(position: number): boolean {
  return position % 8 === 0;
}

export function isOnUpperBase(position: number) {
  return Math.floor(position / 8) === 0;
}
