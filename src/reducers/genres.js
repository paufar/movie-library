import { FETCH_GENRES } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_GENRES: 
			return [
				...state, 
				action.payload.data.genres
			];
		default:
			return state;
	}
}