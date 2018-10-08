import React from 'react';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w154/';

const MovieItem = ({ movie, onMovieSelect, getMovieReleaseYear }) => {
	const { title, poster_path, release_date } = movie;
	return (
		<li className="movie-item" onClick={() => onMovieSelect(movie)}>
			<img src={`${BASE_IMG_URL}${poster_path}`} alt={`${title} - Movie Poster`}/> 
			<p className="movie-title">{title}</p>
			<p className="movie-release-date">{getMovieReleaseYear(release_date)}</p> {/* placeholder date */}
		</li>
	);
}

export default MovieItem;