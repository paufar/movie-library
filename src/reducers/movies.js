import * as types from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case types.FETCH_MOVIES: 
			return [
				action.payload.data.results
			];
		default:
			return state;
	}
}