import { combineReducers } from 'redux';
import MoviesReducer from './movies';
import GenresReducer from './genres';
import CastReducer from './cast';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  genres: GenresReducer,
  cast: CastReducer
});

export default rootReducer;
