import {createReducer} from 'typesafe-actions';
import {
  fetchMovieDetailAsync,
  fetchMovieDetailCreditAsync,
  fetchNowPlayingMoviesAsync,
  fetchPopularMoviesAsync,
  fetchTopRatedMoviesAsync,
  fetchUpComingMoviesAsync,
} from './actions';
import {combineReducers} from 'redux';

import {Movie, MovieListResponse} from './models/Movie';

import {Credits} from './models/Credits';
export const isLoadingTodos = createReducer(false as boolean)
  .handleAction(
    [fetchPopularMoviesAsync.request, fetchMovieDetailAsync.request],
    () => true,
  )
  .handleAction(
    [
      fetchPopularMoviesAsync.success,
      fetchPopularMoviesAsync.failure,
      fetchMovieDetailAsync.success,
      fetchMovieDetailAsync.failure,
      fetchMovieDetailAsync.cancel,
    ],
    () => false,
  );

const popularMovies = createReducer(
  null as MovieListResponse | null,
).handleAction(
  fetchPopularMoviesAsync.success,
  (state, action) => action.payload,
);

const nowPlayingMovies = createReducer(
  null as MovieListResponse | null,
).handleAction(
  fetchNowPlayingMoviesAsync.success,
  (state, action) => action.payload,
);

const topRatedMovies = createReducer(
  null as MovieListResponse | null,
).handleAction(
  fetchTopRatedMoviesAsync.success,
  (state, action) => action.payload,
);

const upComingMovies = createReducer(
  null as MovieListResponse | null,
).handleAction(
  fetchUpComingMoviesAsync.success,
  (state, action) => action.payload,
);

const movieDetail = createReducer(null as Movie | null)
  .handleAction(
    fetchMovieDetailAsync.success,
    (state, action) => action.payload,
  )
  .handleAction(
    [fetchMovieDetailAsync.request, fetchMovieDetailAsync.cancel],
    () => null,
  );

const movieDetailCredits = createReducer(null as Credits | null)
  .handleAction(
    fetchMovieDetailCreditAsync.success,
    (state, action) => action.payload,
  )
  .handleAction(
    [fetchMovieDetailCreditAsync.request, fetchMovieDetailCreditAsync.cancel],
    () => null,
  );

const moviesReducer = combineReducers({
  isLoadingTodos,
  popularMovies,
  nowPlayingMovies,
  topRatedMovies,
  upComingMovies,
  movieDetail,
  movieDetailCredits,
});

export default moviesReducer;
export type MovieState = ReturnType<typeof moviesReducer>;
