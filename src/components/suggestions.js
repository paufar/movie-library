import React from 'react';

const Suggestions = ({results, onMovieSelect, getMovieReleaseYear, handleSelect}) => {
	let options; 

	if( results.length === 0) {
		options = <p>No results found</p>
	} else {
	  	options = results.map((result) => {
	  		const year = getMovieReleaseYear(result.release_date);

		    return (
		    	<li key={result.id} className="suggestion" onClick={() => {onMovieSelect(result); handleSelect()}}>
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