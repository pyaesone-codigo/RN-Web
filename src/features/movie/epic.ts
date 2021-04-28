// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Epic} from 'redux-observable';
import {from, of} from 'rxjs';
import {filter, switchMap, map, catchError} from 'rxjs/operators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {RootAction, RootState, Services, isActionOf} from 'typesafe-actions';
import {fetchPopularMoviesAsync} from './actions';
export const loadTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(fetchPopularMoviesAsync.request)),
    switchMap(() =>
      from(api.movies.loadSnapshot()).pipe(
        map(fetchPopularMoviesAsync.success),
        catchError((message: string) =>
          of(fetchPopularMoviesAsync.failure(message)),
        ),
      ),
    ),
  );
