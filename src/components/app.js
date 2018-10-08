import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies, fetchGenreList } from '../actions/index';
import MovieList from '../containers/movie_list';
import GenreFilter from '../containers/genre_filter';
import SearchBar from './search_bar';
import Modal from './movie_details_modal';

const topRatedMoviesUrl = 'movie/top_rated?';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { showModal: false};

		this.handleMovieSelection = this.handleMovieSelection.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	componentDidMount() {
		this.props.fetchMovies(topRatedMoviesUrl);
		this.props.fetchGenreList();
	}
	toggleModal() {
		this.setState({
			showModal: !this.state.showModal
		});

		//disable scrolling when modal is open
		document.querySelector("body").classList.toggle("modal-open");
	}

	getMovieReleaseYear(date) {
		const releaseDate = new Date(date);
		return releaseDate.getFullYear();
	}

	handleMovieSelection(movie) {
		this.setState({
			selectedMovie: movie
		})		

		this.toggleModal();
	}
	render() {
	    return (
	      <div className="App">
	      	<div className="body-content">
	      		<div className="filters">
					<SearchBar onMovieSelect={this.handleMovieSelection} getMovieReleaseYear={this.getMovieReleaseYear}/>
			      	<GenreFilter />
		      	</div>

		      	<MovieList onMovieSelect={this.handleMovieSelection} getMovieReleaseYear={this.getMovieReleaseYear}/>
	      	</div>
	      	{
	      		this.state.showModal && this.state.selectedMovie &&
	      		<Modal selectedMovie={this.state.selectedMovie} onCloseModal={this.toggleModal} getMovieReleaseYear={this.getMovieReleaseYear}/>
	      	}
	      </div>
	    );
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMovies, fetchGenreList }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);