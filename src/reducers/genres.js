import * as types from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
	switch(action.type) {
		case types.FETCH_GENRES: 
			return _.mapKeys(action.payload.data.genres, 'id');
		default:
			return state;
	}
}