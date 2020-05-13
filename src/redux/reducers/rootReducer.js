import { ADD_CHARGE_DATA_SUCCESS,
  ADD_INCOME_DATA_SUCCESS } from '../actions/home.actions';

import {
  LOAD_ICONS_SUCCESS,
  GET_USER_DATA,
  GET_TOTAL_BALANCE,
} from '../actions/root.actions';

const SWITCH_CHANGE = 'SWITCH_CHANGE';

const initialState = {
  balance: 0,
  data: {
    name: '',
    email: '',
  },
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
    //TODO
    case GET_USER_DATA:
      return {
        ...state,
        balance: action.balance.toFixed(2),
      };
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
    case GET_USER_DATA:
      return {
        ...state,
        data: {
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    case GET_TOTAL_BALANCE: {
      return {
        ...state,
        balance: action.payload.toFixed(2),
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
