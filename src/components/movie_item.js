import React from 'react';
import moviePlaceholderImage from '../images/movie-placeholder.svg';

const MovieItem = ({ movie, onMovieSelect, getMovieReleaseYear }) => {
	const { title, poster_path, release_date } = movie;
	console.log(poster_path);
	const movieImage = poster_path === null ? moviePlaceholderImage : `http://image.tmdb.org/t/p/w154/${poster_path}`;
	return (
		<li className="movie-item" onClick={() => onMovieSelect(movie)}>
			<img src={movieImage} alt={`${title} - Movie Poster`}/> 
			<p className="movie-title">{title}</p>
			<p className="movie-release-date">{getMovieReleaseYear(release_date)}</p> {/* placeholder date */}
		</li>
	);
}

export default MovieItem;