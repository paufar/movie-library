import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './suggestions';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			query: '', 
			results: [], 
			showSuggestions: false 
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.toggleSuggestions = this.toggleSuggestions.bind(this);
		this.handleMovieSelect = this.handleMovieSelect.bind(this);
		this.getInfo = this.getInfo.bind(this);
	}

	getInfo() {
		//Fetching data based on user input query
	    axios.get(`https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&include_adult=false&query=${this.state.query}&api_key=fea48aa90ea7568ab98e7b21cdb2515a`)
	      .then(({ data }) => {
	        this.setState({
	          results: data.results
	        })
	      });
	}

	toggleSuggestions(searchBarValue) {
		if(searchBarValue === '' || typeof(searchBarValue) !== 'string') {
			this.setState({ showSuggestions: false })
		} else {
			this.setState({ showSuggestions : true })
		}
	}
	handleInputChange(e){
		this.toggleSuggestions(e.target.value);
		this.setState({
	      query: this.search.value
	    }, () => {
	      if (this.state.query && this.state.query.length >= 1) {
	          this.getInfo();
	      } 
	    })
	}

	handleMovieSelect() {
		this.setState({ query: ''}, () => {
			this.toggleSuggestions(this.search.value)
		}); //emptying the search bar and toggling the suggestions container
	}

	render() {
		return (
			<form className="search-bar-container">
				<input 
					value={this.state.query}
					type="search"
					placeholder="Search"
					ref={input => this.search = input}
         			onChange={this.handleInputChange} 
         			onBlur={this.toggleSuggestions} />
         			{ 
         				this.state.showSuggestions && 
         				<Suggestions results={this.state.results} onMovieSelect={this.props.onMovieSelect} getMovieReleaseYear={this.props.getMovieReleaseYear} handleSelect={this.handleMovieSelect}/>
         			}
			</form>	
		);
	}
}

