import {combineEpics} from 'redux-observable';

import * as movieEpics from '../features/movie/epic';

export default combineEpics(...Object.values(movieEpics));
