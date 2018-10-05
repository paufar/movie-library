import axios from 'axios';

const API_KEY = 'fea48aa90ea7568ab98e7b21cdb2515a';

export const FETCH_MOVIES = 'FETCH_MOVIES';

export function fetchMovies() {
	const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
	const request = axios.get(url);
	return {
		type: FETCH_MOVIES,
		payload: request
	};
}