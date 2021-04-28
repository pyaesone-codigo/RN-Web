import {combineReducers} from 'redux';

import moviesReducer from '../features/movie/reducer';
const rootReducer = combineReducers({
  movie: moviesReducer,
});

export default rootReducer;
