import React from 'react';
import '../styles/components/movie-details-modal.scss';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w780/';

const Modal = ({ selectedMovie, onCloseModal }) => {
	console.log(selectedMovie);
	const { id, title, backdrop_path , overview} = selectedMovie;
	return (
		<div className="modal-outer-container">
			<div className="modal-inner-container">
				<div className="close-btn" onClick={onCloseModal}>×</div>
				<div className="banner">
					<img className="backdrop-poster" src={`${BASE_IMG_URL}${backdrop_path}`} alt={title} />
				</div>
				<div className="details">
					<div className="movie-info">
						<h3 className="movie-title">{ title }</h3>
						<p className="movie-genre hairline">genre</p>
						<p className="movie-description">{ overview }</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;