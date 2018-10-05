import React from 'react';
import MovieItem from './movie_item';

const MovieList = (props) => {
	const movieItems = props.movies.map((movie,i) => {
		return (
			<MovieItem 
				key={movie.id} 
				movie={movie} />
		);
	});

	return (
		<div className="movie-list">
			<h1>Top Rated Movies</h1>
			<ul>
				{ movieItems }
			</ul>
		</div>
	);
}

export default MovieList;