import React, { Component } from 'react';
import Actor from '../components/actor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCast } from '../actions/index';
import _ from 'lodash'; 

class Cast extends Component {
	componentDidMount() {
		//fetching cast data based on selected movie
		this.props.fetchCast(this.props.movieId);
	}

	render() {
		const { cast } = this.props;

		const actors = _.map(cast, actor => {
			return <Actor key={actor.credit_id} name={actor.name} thumbnail={actor.profile_path}/>
		});

		if(!cast) {
			return <div>Loading...</div>
		}
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

function mapStateToProps({ cast }) {
	return { cast };
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCast }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cast);