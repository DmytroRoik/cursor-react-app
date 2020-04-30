import {
  LOAD_AVATAR_SUCCESS,
  GET_USER_DATA,
  } from '../actions/profile.actions';

const initialState = {
  data: [],
  avatars: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AVATAR_SUCCESS: {
      return {
        ...state,
        avatars: action.payload,
      };
    }
    case GET_USER_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default profileReducer;

