import { combineReducers } from 'redux';
import MoviesReducer from './movies';
import GenresReducer from './genres';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  genres: GenresReducer
});

export default rootReducer;
