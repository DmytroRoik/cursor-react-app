import { GET_USER_DATA } from '../actions/profile.actions';

const initialState = {
  data: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
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

