import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './components/movie_list';

const API_KEY = 'fea48aa90ea7568ab98e7b21cdb2515a';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			movies: [],
			pageNum: 1
		};

		this.fetchMovies(); //Fetching top rated movies on load from TMDB
	}

	fetchMovies(){
		axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en&page=${this.state.pageNum}`)
		.then(movies => { this.setState({ movies: movies.data.results }) })
	} 

	render() {
	    return (
	      <div className="App">
	      	<MovieList movies={this.state.movies}/>
	      </div>
	    );
	}
}

export default App;
