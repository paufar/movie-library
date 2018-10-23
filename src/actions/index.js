import axios from 'axios';
import * as types from './types';

const API_KEY = 'fea48aa90ea7568ab98e7b21cdb2515a';

export function fetchMovies(CUSTOM_URL) {
	const url = `https://api.themoviedb.org/3/${CUSTOM_URL}api_key=${API_KEY}`;
	const request = axios.get(url);
	return {
		type: types.FETCH_MOVIES,
		payload: request
	};
}

export function fetchGenreList() {
	const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
	const request = axios.get(url);
	return {
		type: types.FETCH_GENRES,
		payload: request
	}
}

export function fetchCast(MOVIE_ID, callback) {
	const url = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${API_KEY}`;
	const request = axios.get(url)
	.then( response => {
		callback();
		return response;
	});

	return {
		type: types.FETCH_CAST, 
		payload: request
	}
}
