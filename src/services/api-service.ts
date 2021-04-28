import {ajax} from 'rxjs/ajax';
import {Config} from '../config';

const baseURL = 'https://api.themoviedb.org/3/';

export const POPULAR_MOVIE = (page: number) =>
  `${baseURL}movie/popular?api_key=${Config.API_KEY}&language=en-US&page=${page}`;

export const NOW_PLAYING_MOVIE = (page: number) =>
  `${baseURL}movie/now_playing?api_key=${Config.API_KEY}&language=en-US&page=${page}`;

export const TOP_RATED_MOVIE = (page: number) =>
  `${baseURL}movie/top_rated?api_key=${Config.API_KEY}&language=en-US&page=${page}`;

export const UP_COMING_MOVIE = (page: number) =>
  `${baseURL}movie/upcoming?api_key=${Config.API_KEY}&language=en-US&page=${page}`;

export const DETAIL_MOVIE = (id: number) =>
  `${baseURL}movie/${id}?api_key=${Config.API_KEY}&language=en-US`;

export const MOVIE_CREDITS = (id: number) =>
  `${baseURL}movie/${id}/credits?api_key=${Config.API_KEY}&language=en-US`;

export const loadPopularMovie = (page: number) => {
  return ajax.get(POPULAR_MOVIE(page)).toPromise();
};

export const loadNowPlayingMovie = (page: number) => {
  return ajax.get(NOW_PLAYING_MOVIE(page)).toPromise();
};

export const loadTopRatedMovie = (page: number) => {
  return ajax.get(TOP_RATED_MOVIE(page)).toPromise();
};

export const loadUpComingMovie = (page: number) => {
  return ajax.get(UP_COMING_MOVIE(page)).toPromise();
};

export const loadMovieDetail = (id: number) => {
  return ajax.get(DETAIL_MOVIE(id)).toPromise();
};

export const loadMovieDetailCredits = (id: number) => {
  return ajax.get(MOVIE_CREDITS(id)).toPromise();
};

export function loadSnapshot(): Promise<[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([]);
    }, 500);
  });
}
