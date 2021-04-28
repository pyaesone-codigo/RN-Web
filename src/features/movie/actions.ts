import {createAsyncAction} from 'typesafe-actions';

export const fetchPopularMoviesAsync = createAsyncAction(
  'FETCH_POPULAR_MOVIES_REQUEST',
  'SUCCESS_POPULAR_MOVIES_REQUEST',
  'FAIL_POPULAR_MOVIES_REQUEST',
  'CANCEL_POPULAR_MOVIES_REQUEST',
)<undefined, any, any, any>();
