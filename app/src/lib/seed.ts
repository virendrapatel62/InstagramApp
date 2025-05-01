export function getRandomImage(height: number, width?: number) {
  const _w = width || height;
  return `https://picsum.photos/${_w}/${height}?q=${Math.random()}`;
}
