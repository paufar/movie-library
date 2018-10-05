import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenreFilter extends Component {
	render() {
		const genreList = this.props.genres.map(list => {
			return list.map((listItem) => {
		  		return <option value={listItem.name} key={listItem.id}>{listItem.name}</option>
			});
		});
		
		return (
			<select>
				{ genreList }
			</select>
		);
	}
} 

function mapStateToProps({ genres }) {
	return { genres };
}

export default connect(mapStateToProps)(GenreFilter);