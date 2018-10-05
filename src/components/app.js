import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions/index';
import MovieList from '../containers/movie_list';
import Modal from './movie_details_modal';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { showModal: true};
	}

	componentDidMount() {
		this.props.fetchMovies();
	}
	render() {
	    return (
	      <div className="App">
	      	<MovieList />

	      	{
	      		this.state.showModal &&
	      		<Modal />
	      	}
	      </div>
	    );
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);