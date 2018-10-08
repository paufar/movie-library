import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies, fetchGenreList } from '../actions/index';
import MovieList from '../containers/movie_list';
import GenreFilter from '../containers/genre_filter';
import SearchBar from './search_bar';
import Modal from './movie_details_modal';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { showModal: false};

		this.handleMovieSelection = this.handleMovieSelection.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	componentDidMount() {
		this.props.fetchMovies();
		this.props.fetchGenreList();
	}
	toggleModal() {
		this.setState({
			showModal: !this.state.showModal
		});

		//disable scrolling when modal is open
		document.querySelector("body").classList.toggle("modal-open");
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
					<SearchBar />
			      	<GenreFilter />
		      	</div>

		      	<MovieList onMovieSelect={this.handleMovieSelection}/>
	      	</div>
	      	{
	      		this.state.showModal && this.state.selectedMovie &&
	      		<Modal selectedMovie={this.state.selectedMovie} onCloseModal={this.toggleModal}/>
	      	}
	      </div>
	    );
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMovies, fetchGenreList }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);