import { ADD_CHARGE_DATA_SUCCESS,
  ADD_INCOME_DATA_SUCCESS } from '../actions/home.actions';

import { LOAD_ICONS_SUCCESS } from '../actions/root.actions';

const SWITCH_CHANGE = 'SWITCH_CHANGE';

const initialState = {
  balance: 0,
  switchName: 'charge',
  icons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_CHANGE: {
      return {
        ...state, switchName: action.payload,
      };
    }
    case ADD_CHARGE_DATA_SUCCESS: {
      return {
        ...state, balance: action.payload.data.totalBalance,
      };
    }
    case ADD_INCOME_DATA_SUCCESS: {
      return {
        ...state, balance: action.payload.data.totalBalance,
      };
    }
    case LOAD_ICONS_SUCCESS: {
      return {
        ...state,
        icons: action.payload,
      };
    }
    default:
      return state;
  }
};

export const switchChanger = text => ({
  type: SWITCH_CHANGE,
  payload: text,
});

export default rootReducer;

