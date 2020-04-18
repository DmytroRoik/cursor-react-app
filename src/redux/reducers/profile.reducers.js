import {
  GET_USER_DATA,
  GET_TOTAL_BALANCE,
} from '../actions/profile.actions';

const initialState = {
  data: [],
  totalBalance: [],
};

const dataCurrentUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        data: [...action.data],
      };
    case GET_TOTAL_BALANCE: {
      return {
        ...state,
        totalBalance: [...action.totalBalance],
      };
    }
    default:
      return state;
  }
};

export default dataCurrentUser;

