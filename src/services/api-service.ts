export const POPULAR_MOVIE = '';

export function loadSnapshot(): Promise<[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([]);
    }, 500);
  });
}
