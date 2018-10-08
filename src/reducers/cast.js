import { FETCH_CAST } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_CAST: 
			return [
				action.payload.data.cast
			];
		default:
			return state;
	}
}