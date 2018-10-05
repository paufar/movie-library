import React, { Component } from 'react';
import MovieItem from '../components/movie_item';
import { connect } from 'react-redux';

class MovieList extends Component {
	render() {	
		const movieItems = this.props.movies.map((movieData) => {
			return movieData.map((movie,i) => {
				return <MovieItem key={movie.id} movie={movie} />
			})
		});
		 	
		return (
			<div className="movie-list-container">
				<h1>Top Rated Movies</h1>
				<ul>
					{ movieItems }
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ movies }) {
	return { movies };
}

export default connect(mapStateToProps)(MovieList);