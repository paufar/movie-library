import React, { Component } from 'react';
import _ from 'lodash'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCast } from '../actions/index';
import Actor from '../components/actor';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Cast extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMovieId: this.props.movieId
		};
	}
	componentDidMount() {
		this.mounted = true;
		//fetching cast data based on selected movie
		this.props.fetchCast(this.state.currentMovieId, () => {
			this.setState({
				castHasBeenFetched: true
			});
		});
	}

	componentDidUpdate() {
		this.mounted && this.state.currentMovieId !== this.props.movieId &&
		this.setState({
			currentMovieId: this.props.movieId
		}, () => {
			this.props.fetchCast(this.state.currentMovieId, () => {
					this.setState({
						castHasBeenFetched: true
					})
				})
		});
	}

    componentWillUnmount() {
    	this.mounted = false;
    }

	render() {
		const { cast } = this.props;
		const { castHasBeenFetched } = this.state;
		const actorsPlaceHolder = _.times('8',(i) => { return <Actor key={i} thumbnail="placeholder" /> });
		const actors = _.map(cast, actor => {
			return <Actor key={actor.credit_id} name={actor.name} thumbnail={actor.profile_path}/>
		});

		//Settings for the Slick Slider
	    let settings = {
	      infinite: true,
	      slidesToShow: 7,
	      speed: 400, 
	      slidesToScroll: 4,
	      responsive: [
	        {
	          breakpoint: 992,
	          settings: {
	            slidesToShow: 6,
	            slidesToScroll: 3,
	          }
	        },
	        {
	        	breakpoint: 768,
	        	settings: {
	        		slidesToShow: 5,
	        		slidesToScroll: 2
	        	}

	        },
	        {
	        	breakpoint: 600,
	        	settings: {
	        		slidesToShow: 3,
	        		slidesToScroll: 1
	        	}
	        }
	      ]
	    };

		return (
			!_.isEmpty(cast) &&
			<div className="cast">
				<h3 className="section-label">Cast</h3>
				<Slider className="actors-container" {...settings}>
					{ castHasBeenFetched ? actors : actorsPlaceHolder }
				</Slider>
			</div>
		);
	
	}
} 

function mapStateToProps({ cast }) {
	return { cast };
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCast }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cast);