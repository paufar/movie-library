import React, { Component } from 'react';
import actorPlaceHolderImage from '../images/actor-placeholder.svg';

class Actor extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
	  	this.mounted = true;

		const { thumbnail } = this.props;

		if(thumbnail === null || thumbnail === 'placeholder') {
			return;
		}

		const imageLoader = new Image();
		const src = `http://image.tmdb.org/t/p/w185/${thumbnail}`;
	    imageLoader.src = src;

	    imageLoader.onload = () => {
	      	if(this.mounted) {
		      this.setState({ src})
		    }
	    };
	}

	componentWillUnmount(){
		//Can't call setState (or forceUpdate) on an unmounted component so we set the mounted property to false to stop the image loading from setting state after the modal is closed.
	  	this.mounted = false;
	}

	render() {
		const { name} = this.props;

		return (
			<li className="actor">
				<div className="img-container">
					<div className="actor-thumbnail" style={{backgroundImage: `url(${this.state.src || actorPlaceHolderImage})`}}></div>
				</div>
				<p className="actor-name">{ name }</p>
			</li>
		);
	}
}

export default Actor;