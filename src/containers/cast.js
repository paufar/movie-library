import React, { Component } from 'react';
import Actor from '../components/actor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCast } from '../actions/index';

class Cast extends Component {
	componentDidMount() {
		//fetching cast data based on selected movie
		this.props.fetchCast(this.props.movieId);
	}
	render() {
		const maxNumOfActors = 7;
		const actors = this.props.castList.cast.map(castData => {
			return castData.slice(0, maxNumOfActors).map(actor => {
				return <Actor key={actor.id} name={actor.name} thumbnail={actor.profile_path}/>
			});
		});
		
		return (
			<div className="cast">
				<h3 className="section-label">Cast</h3>
				<ul>
					{ actors }
				</ul>
			</div>
		);
	}
} 

function mapStateToProps(castList) {
	return { castList };
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCast }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cast);