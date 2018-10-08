import React from 'react';

const Actor = ({thumbnail , name}) => {		
	return (
		<li className="actor">
			<div className="img-container">
				<div className="actor-thumbnail" style={{backgroundImage: `url(http://image.tmdb.org/t/p/w185/${thumbnail})`}}></div>
			</div>
			<p className="actor-name">{ name }</p>
		</li>
	);
} 

export default Actor;