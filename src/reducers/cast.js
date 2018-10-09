import * as types from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case types.FETCH_CAST: 
			return [
				action.payload.data.cast
			];
		default:
			return state;
	}
}