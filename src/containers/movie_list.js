import React, { Component } from 'react';
import MovieItem from '../components/movie_item';
import { connect } from 'react-redux';
import _ from 'lodash';

class MovieList extends Component {
	render() {	
		const { movies } = this.props;
		const movieItems = _.map(movies, movie => {
			return <MovieItem key={movie.id} movie={movie} onMovieSelect={this.props.onMovieSelect} getMovieReleaseYear={this.props.getMovieReleaseYear}/>
		})

		if(!movies) {
			return <div>Loading...</div>
		}

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