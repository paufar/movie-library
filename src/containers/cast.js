import React, { Component } from 'react';
import Actor from '../components/actor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCast } from '../actions/index';
import _ from 'lodash'; 

class Cast extends Component {
	constructor(props) {
		super(props);
		this.state = {
			castHasBeenFetched: false
		};
	}
	componentDidMount() {
		//fetching cast data based on selected movie
		this.props.fetchCast(this.props.movieId, () => {
			this.setState({
				castHasBeenFetched: true
			});
		});
	}

	render() {
		const { cast } = this.props;
		const { castHasBeenFetched } = this.state;
		const actorsPlaceHolder = _.times('8',(i) => { return <Actor key={i} thumbnail="placeholder" /> });
		const actors = _.map(cast, actor => {
			return <Actor key={actor.credit_id} name={actor.name} thumbnail={actor.profile_path}/>
		});

		return (
			!_.isEmpty(cast) &&
			<div className="cast">
				<h3 className="section-label">Cast</h3>
				<ul>
				{ castHasBeenFetched ? actors : actorsPlaceHolder }
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