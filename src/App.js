import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const API_KEY = 'fea48aa90ea7568ab98e7b21cdb2515a';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			movies: [],
			pageNum: 1
		};

		this.fetchMovies();
	}

	fetchMovies(term){
		axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en&page=${this.state.pageNum}`)
		.then(movies => {
			this.setState({ movies: movies.data.results })
		})
	} 

	render() {
		const movieItems = this.state.movies.map( movie => <div>{movie.title}</div>);

	    return (
	      <div className="App">
	      	{ movieItems }
	      </div>
	    );
	}
}

export default App;
