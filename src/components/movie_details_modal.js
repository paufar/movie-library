import React from 'react';
import '../styles/components/movie-details-modal.scss';

const Modal = ({ selectedMovie }) => {
	return (
		<div className="modal-outer-container">
			<div className="modal-inner-container">
				<div className="close-btn">×</div>
				<div className="banner">
					<img className="backdrop-poster" />
				</div>
				<div className="details">
					<div className="movie-info">
						<h3 className="movie-title">title</h3>
						<p className="movie-genre hairline">genre</p>
						<p className="movie-description">overview</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;