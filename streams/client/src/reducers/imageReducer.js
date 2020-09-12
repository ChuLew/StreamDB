import _ from 'lodash';
import {
  FETCH_SAVED_PICTURES,
  ADD_PICTURE,
  DELETE_PICTURE
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SAVED_PICTURES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case ADD_PICTURE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PICTURE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
