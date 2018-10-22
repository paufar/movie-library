import * as types from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
	switch(action.type) {
		case types.FETCH_MOVIES: 
			return _.mapKeys(action.payload.data.results, 'id');
		default:
			return state;
	}
}