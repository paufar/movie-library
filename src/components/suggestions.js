import React from 'react';

const Suggestions = ({results, onMovieSelect, getMovieReleaseYear, handleSelect}) => {
	let options; 

	if( results.length === 0) {
		options = <p>No results found</p>
	} else {
	  	options = results.map((result) => {
	  		const year = getMovieReleaseYear(result.release_date);

	  		//onClick method used on the suggestion list items was replaced by onMouseDown because it was conflicting with the onBlur method from the search bar input.
		    return (
		    	<li key={result.id} className="suggestion" onMouseDown={() => {onMovieSelect(result); handleSelect()}}>
			      	{ result.title }
			      	<span className="release-date">
			      		{ isNaN(year) ? '' : year }
			      	</span>
			    </li>
		    );
	  });
	}

  return <ul className="autocomplete-container">{options}</ul>
}

export default Suggestions;