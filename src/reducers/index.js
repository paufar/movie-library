import { combineReducers } from 'redux';
import MoviesReducer from './movies';

const rootReducer = combineReducers({
  movies: MoviesReducer
});

export default rootReducer;
