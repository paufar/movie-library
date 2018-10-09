import * as types from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case types.FETCH_GENRES: 
			return [
				...state, 
				action.payload.data.genres
			];
		default:
			return state;
	}
}