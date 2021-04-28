// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Epic} from 'redux-observable';
import {from, of} from 'rxjs';
import {filter, switchMap, map, catchError} from 'rxjs/operators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {RootAction, RootState, Services, isActionOf} from 'typesafe-actions';
import {
  fetchMovieDetailAsync,
  fetchMovieDetailCreditAsync,
  fetchNowPlayingMoviesAsync,
  fetchPopularMoviesAsync,
  fetchTopRatedMoviesAsync,
  fetchUpComingMoviesAsync,
} from './actions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Movie} from './models/Movie';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Credits} from './models/Credits';
export const loadPopularMovieEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(fetchPopularMoviesAsync.request)),
    switchMap(() =>
      from(api.movies.loadPopularMovie(1)).pipe(
        map(result => {
          let res = result.response;
          return fetchPopularMoviesAsync.success({
            lastPage: res.total_page,
            movies: res.results,
          });
        }),
        catchError((message: string) =>
          of(
            fetchPopularMoviesAsync.failure({
              errorMessage: message,
            }),
          ),
        ),
      ),
    ),
  );

export const loadNowPlayingMovieEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(fetchNowPlayingMoviesAsync.request)),
    switchMap(() =>
      from(api.movies.loadNowPlayingMovie(1)).pipe(
        map(result => {
          let res = result.response;
          return fetchNowPlayingMoviesAsync.success({
            lastPage: res.total_page,
            movies: res.results,
          });
        }),
        catchError((message: string) =>
          of(
            fetchNowPlayingMoviesAsync.failure({
              errorMessage: message,
            }),
          ),
        ),
      ),
    ),
  );

export const loadTopRatedMovieEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(fetchTopRatedMoviesAsync.request)),
    switchMap(() =>
      from(api.movies.loadTopRatedMovie(1)).pipe(
        map(result => {
          let res = result.response;
          return fetchTopRatedMoviesAsync.success({
            lastPage: res.total_page,
            movies: res.results,
          });
        }),
        catchError((message: string) =>
          of(
            fetchTopRatedMoviesAsync.failure({
              errorMessage: message,
            }),
          ),
        ),
      ),
    ),
  );

export const loadUpComingMovieEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(fetchUpComingMoviesAsync.request)),
    switchMap(() =>
      from(api.movies.loadUpComingMovie(1)).pipe(
        map(result => {
          let res = result.response;
          return fetchUpComingMoviesAsync.success({
            lastPage: res.total_page,
            movies: res.results,
          });
        }),
        catchError((message: string) =>
          of(
            fetchUpComingMoviesAsync.failure({
              errorMessage: message,
            }),
          ),
        ),
      ),
    ),
  );

export const loadMovieDetailEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(fetchMovieDetailAsync.request)),
    switchMap(action =>
      from(api.movies.loadMovieDetail(action.payload)).pipe(
        map(result => {
          let res = result.response as Movie;
          return fetchMovieDetailAsync.success(res);
        }),
        catchError((message: string) =>
          of(
            fetchMovieDetailAsync.failure({
              errorMessage: message,
            }),
          ),
        ),
      ),
    ),
  );

export const loadMovieDetailCreditEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(fetchMovieDetailCreditAsync.request)),
    switchMap(action =>
      from(api.movies.loadMovieDetailCredits(action.payload)).pipe(
        map(result => {
          let res = result.response as Credits;
          return fetchMovieDetailCreditAsync.success(res);
        }),
        catchError((message: string) =>
          of(
            fetchMovieDetailCreditAsync.failure({
              errorMessage: message,
            }),
          ),
        ),
      ),
    ),
  );
