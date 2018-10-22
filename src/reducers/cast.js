import * as types from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
	switch(action.type) {
		case types.FETCH_CAST: 
			return _.mapKeys(action.payload.data.cast, 'cast_id');
		default:
			return state;
	}
}