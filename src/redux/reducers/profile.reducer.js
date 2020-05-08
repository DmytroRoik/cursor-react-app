import {
  GET_USER_DATA,
  ADD_USER_DATA_SUCCESS,
  POST_AVATAR_SUCCESS,
} from '../actions/profile.actions';

const initialState = {
  data: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_USER_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
      };
    }
    case POST_AVATAR_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;

