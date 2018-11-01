import React, { Component } from 'react';
import Cast from '../containers/cast';
import { connect } from 'react-redux';
const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w780/'; //Size options for images: "w92", "w154", "w185", "w342", "w500", "w780", or "original"

class Modal extends Component {
	constructor(props) {
		super(props);
		
		const movieList = document.querySelector('.movie-list-container ul');
		this.state = {
			selectedMovie: this.props.selectedMovie,
			movieItem: document.querySelector(`.movie-item[data-id='${this.props.selectedMovie.id}']`),
			firstChildId : parseInt(movieList.firstChild.dataset.id), 
			lastChildId: parseInt(movieList.lastChild.dataset.id)
		};

		this.handleModalNavigation = this.handleModalNavigation.bind(this);

	}

	componentDidMount() {
		this.mounted = true;
		this.showHideNavButtons("load", this.state.selectedMovie.id, this.state.selectedMovie);
		this.mounted && document.addEventListener('keydown', (e) => {
			if (e.keyCode === 39 && this.state.selectedMovie.id !== this.state.lastChildId) {
				this.handleModalNavigation(e, "next", this.state.movieItem);
			} else if(e.keyCode === 37 && this.state.selectedMovie.id !== this.state.firstChildId) {
				this.handleModalNavigation(e, "previous", this.state.movieItem);
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	showHideNavButtons(event, id, currentMovieItem) {
		const {lastChildId, firstChildId} = this.state;

		//ToDo: Refactor here - duplicate code
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
			
			this.setState({ selectedMovie: prevMovieData }, () => {
				this.setState({
					movieItem: document.querySelector(`.movie-item[data-id='${this.state.selectedMovie.id}']`)
				})
			});
			this.showHideNavButtons("previous", movieBeforeId, currentMovieItem);

		} else if(navigation === 'next') {
			const movieAfterId = currentMovieItem.nextSibling.dataset.id;
			const nextMovieData = movies[movieAfterId];

			//ToDo: refactor duplcicate code
			this.setState({ selectedMovie: nextMovieData }, () => {
				this.setState({
					movieItem: document.querySelector(`.movie-item[data-id='${this.state.selectedMovie.id}']`)
				})
			});	
			this.showHideNavButtons("next", movieAfterId, currentMovieItem);
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