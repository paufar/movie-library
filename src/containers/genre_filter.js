import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions/index';
import _ from 'lodash';

class GenreFilter extends Component {
	constructor(props) {
		super(props);

		this.filterByGenre = this.filterByGenre.bind(this);
	}

	filterByGenre(e) {
		const GENRE_ID = e.target.value;
		const filterUrl =  GENRE_ID === 'all' ? 'movie/top_rated?' : `discover/movie?sort_by=popularity.desc&page=1&with_genres=${GENRE_ID}&`;
		this.props.fetchMovies(filterUrl);
	}

	render() {
		const { genres } = this.props;
		const genreList = _.map(genres, genre => {
		  	return <option value={genre.id} key={genre.id}>{genre.name}</option>
		});
		
		return (
			<div className="genre-filter">
				<label>Genre</label>
				<select id="genre-list" onChange={this.filterByGenre}>
					<option value="all" defaultValue>All</option>
					{ genreList }
				</select>
			</div>
		);
	}
} 

function mapStateToProps({ genres }) {
	return { genres };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter);