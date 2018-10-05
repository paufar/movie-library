import React from 'react';
import '../styles/components/movie-item.scss';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w154/';

const MovieItem = ({ movie }) => {
	const { title, poster_path } = movie;
	return (
		<li className="movie-item">
			<img src={`${BASE_IMG_URL}${poster_path}`} alt={`${title} - Movie Poster`}/> 
		</li>
	);
}

export default MovieItem;