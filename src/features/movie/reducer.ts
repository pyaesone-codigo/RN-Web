import {createReducer} from 'typesafe-actions';
import {fetchPopularMoviesAsync} from './actions';
import {combineReducers} from 'redux';
export const isLoadingTodos = createReducer(false as boolean)
  .handleAction([fetchPopularMoviesAsync.request], () => true)
  .handleAction(
    [fetchPopularMoviesAsync.success, fetchPopularMoviesAsync.failure],
    () => false,
  );

const moviesReducer = combineReducers({
  isLoadingTodos,
});

export default moviesReducer;
export type MovieState = ReturnType<typeof moviesReducer>;
