import React, { Component } from 'react';
import Cast from '../containers/cast';
import { connect } from 'react-redux';
const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w780/'; //Size options for images: "w92", "w154", "w185", "w342", "w500", "w780", or "original"


class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedMovie: this.props.selectedMovie
		};

		this.handleModalNavigation = this.handleModalNavigation.bind(this);

	}

	componentDidMount() {
		this.showHideNavButtons("load", this.state.selectedMovie.id, this.state.selectedMovie);
	}

	showHideNavButtons(event, id, currentMovieItem) {
		const movieList = document.querySelector('.movie-list-container ul');
		const firstChildId = parseInt(movieList.firstChild.dataset.id);
		const lastChildId = parseInt(movieList.lastChild.dataset.id);
		
		//ToDo: Refactor here
		if (event === 'load') {
			if(id === firstChildId) {
				document.querySelector('.previous-btn').style.visibility = 'hidden';
			} else if ( id === lastChildId) {
				document.querySelector('.next-btn').style.visibility = 'hidden';	
			}
		} else if(event === 'previous' && currentMovieItem.previousSibling.previousSibling === null) {
			document.querySelector('.previous-btn').style.visibility = 'hidden';
		} else if (event === 'next' && currentMovieItem.nextSibling.nextSibling === null) {
			document.querySelector('.next-btn').style.visibility = 'hidden';	
		}

	}
	handleModalNavigation(e, navigation, currentMovieItem) {
		//ToDo: handle keyboard navigation
		e.stopPropagation();
		const { movies } = this.props;
		document.querySelector('.modal-navigation-btn').style.visibility = 'visible';
		if(navigation === 'previous') {
			const movieBeforeId = currentMovieItem.previousSibling.dataset.id;
			const prevMovieData = movies[movieBeforeId];
			
			this.setState({ selectedMovie: prevMovieData });
			this.showHideNavButtons("previous", movieBeforeId, currentMovieItem);
			// if (currentMovieItem.previousSibling.previousSibling === null) {
			// 	document.querySelector('.previous-btn').style.visibility = 'hidden';
			// }

		} else if(navigation === 'next') {
			const movieAfterId = currentMovieItem.nextSibling.dataset.id;
			const nextMovieData = movies[movieAfterId];

			this.setState({ selectedMovie: nextMovieData });	
			this.showHideNavButtons("next", movieAfterId, currentMovieItem);

			// if (currentMovieItem.nextSibling.nextSibling === null) {
			// 	document.querySelector('.next-btn').style.visibility = 'hidden';
			// }
		}
	}

	render() {
		const { onCloseModal, getMovieReleaseYear } = this.props;
		const { selectedMovie } = this.state;
		const { id, title, backdrop_path , overview, release_date } = selectedMovie;
		const currentMovieItem = document.querySelector(`.movie-item[data-id='${id}']`);

		return (
			<div className="modal-outer-container" onClick={onCloseModal}>
				<div className="modal-navigation-btn previous-btn" onClick={(e) => this.handleModalNavigation(e ,'previous', currentMovieItem)}> ← </div>
				<div className="modal-inner-container" onClick={(e) => e.stopPropagation()} style={{backgroundImage: `url(${BASE_IMG_URL}${backdrop_path}`}}>
					<div className="backdrop">
						<div className="close-btn" onClick={onCloseModal}>×</div>
						<div className="details">
							<div className="movie-info">
								<h2 className="movie-title">{ title }</h2>
								<p className="movie-release-date subheading">{getMovieReleaseYear(release_date)}</p>
								<p className="movie-description">{ overview }</p>
							</div>
							<Cast movieId={id}/>
						</div>
					</div>
				</div>
				<div className="modal-navigation-btn next-btn" onClick={(e) => this.handleModalNavigation(e, 'next', currentMovieItem)}>→</div>
			</div>
		);
	}
}

function mapStateToProps({ movies }){
	return { movies };
}
export default connect(mapStateToProps)(Modal);