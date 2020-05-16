import {
  GET_USER_DATA,
  ADD_USER_DATA_SUCCESS,
  POST_AVATAR_SUCCESS,
  SWITCH_TOASTER,
} from '../actions/profile.actions';

import {
  ADD_CHARGE_DATA_SUCCESS,
} from '../actions/home.actions';

const initialState = {
  data: null,
  isToasterOpen: false,
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
    case SWITCH_TOASTER: {
      return {
        ...state,
        isToasterOpen: action.payload,
      };
    }
    case ADD_CHARGE_DATA_SUCCESS: {
      let showToaster = false;
      if (state.data) {
        if ((action.payload.data.totalBalance < state
          .data.criticalBudget) && state.data.notify) {
          showToaster = true;
        }
      }
      return {
        ...state,
        isToasterOpen: showToaster,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
