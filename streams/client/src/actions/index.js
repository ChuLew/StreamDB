import streams from "../apis/streams";
import unsplash from "../apis/unsplash";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  CHANGE_TERM,
  FETCH_PICTURES,
  SELECT_PICTURE,
  FETCH_SAVED_PICTURES,
  ADD_PICTURE,
  DELETE_PICTURE
} from "./types";
export const selectPicture = (picture) => {
  return {
    type: SELECT_PICTURE,
    payload: picture,
  };
};
export const changeTerm = (term) => {
  return {
    type: CHANGE_TERM,
    payload: term,
  };
};
export const fetchPictures = (term) => async (dispatch) => {
  const response = await unsplash.get(
    "https://api.unsplash.com/search/photos",
    {
      params: { query: term },
    }
  );
  dispatch({ type: FETCH_PICTURES, payload: response.data.results });
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/api/streams", {
    ...formValues,
    userId,
  });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};
export const addPicture = (obj) => async (dispatch)=> {
  const response = await streams.post("/api/pictures", {...obj});
  dispatch({type:ADD_PICTURE,payload:response.data});
}
export const deletePicture = id => async (dispatch) => {
  await streams.delete(`/api/pictures/${id}`);

  dispatch({ type: DELETE_PICTURE, payload: id });
}

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/api/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
export const fetchSavedPictures = () => async (dispatch) => {
  const response = await streams.get("/api/pictures");

  dispatch({ type: FETCH_SAVED_PICTURES, payload: response.data });
};
export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/api/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/api/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/api/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
