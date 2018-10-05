import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies, fetchGenreList } from '../actions/index';
import MovieList from '../containers/movie_list';
import GenreFilter from '../containers/genre_filter';
import Modal from './movie_details_modal';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { showModal: false};

		this.handleMovieSelection = this.handleMovieSelection.bind(this);
	}

	componentDidMount() {
		this.props.fetchMovies();
		this.props.fetchGenreList();
	}

	handleMovieSelection(movie) {
		this.setState({
			showModal: true, 
			selectedMovie: movie
		})
		
		//disable scrolling when modal is open
		document.querySelector("body").classList.toggle("modal-open");
	}
	render() {
	    return (
	      <div className="App">
	      	<GenreFilter />
	      	
	      	<MovieList onMovieSelect={this.handleMovieSelection}/>
	      	{
	      		this.state.showModal && this.state.selectedMovie &&
	      		<Modal selectedMovie={this.state.selectedMovie} onCloseModal={() => this.setState({showModal: !this.state.showModal})}/>
	      	}
	      </div>
	    );
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMovies, fetchGenreList }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);