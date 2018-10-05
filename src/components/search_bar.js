import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { query: '' };

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleInputChange(e){
		this.setState({ query: e.target.value })
	}

	handleFormSubmit(e) {
		e.preventDefault();

		//fetch movies based using user input using https://api.themoviedb.org/3/search/company?

		this.setState({ query: ''}); //emptying the search bar
	}
	render() {
		return (
			<form className="search-bar-container" onSubmit={this.handleFormSubmit}>
				<input 
					value={this.state.query}
					type="search"
					placeholder="Search"
					onChange={this.handleInputChange} />
			</form>	
		);
	}
}

