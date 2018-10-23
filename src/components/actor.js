import React from 'react';

const Actor = ({ thumbnail, name }) => {
	return (
		<div className="actor">
			<div className="img-container">
				<div className="actor-placeholder-image"></div>
				{ thumbnail === null || thumbnail === 'placeholder' ? '' : <div className="actor-thumbnail" style={{backgroundImage: `url(http://image.tmdb.org/t/p/w185/${thumbnail}`}}></div> }
			</div>
			<p className="actor-name">{ name }</p>
		</div>
	);

}

export default Actor;