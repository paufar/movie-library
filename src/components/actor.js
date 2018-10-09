import React from 'react';
import actorPlaceHolderImage from '../images/actor-placeholder.svg';

const Actor = ({thumbnail , name}) => {		
	const image = thumbnail === null ? `url(${actorPlaceHolderImage})` : `url(http://image.tmdb.org/t/p/w185/${thumbnail})`; 
	return (
		<li className="actor">
			<div className="img-container">
				<div className="actor-thumbnail" style={{backgroundImage: `${image}`}}></div>
			</div>
			<p className="actor-name">{ name }</p>
		</li>
	);
} 

export default Actor;