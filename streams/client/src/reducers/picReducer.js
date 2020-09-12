import {FETCH_PICTURES,CHANGE_TERM, SELECT_PICTURE} from '../actions/types';

const INTIAL_STATE = {
  term:"",
  images:[],
  selectedPicture:null
}
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PICTURES:
      return { ...state, images: action.payload };
    case CHANGE_TERM:
      return { ...state, term:action.payload };
    case SELECT_PICTURE:
      return {...state, selectedPicture:action.payload}
    default:
      return state;
  }
};
