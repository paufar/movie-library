import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions/index';
import MovieList from '../containers/movie_list';


class App extends Component {
	componentDidMount() {
		this.props.fetchMovies();
	}
	render() {
	    return (
	      <div className="App">
	      	<MovieList />
	      </div>
	    );
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);