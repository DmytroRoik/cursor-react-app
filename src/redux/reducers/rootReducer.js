import { ADD_CHARGE_DATA_SUCCESS, ADD_INCOME_DATA_SUCCESS } from '../actions/charge.actions';
const SWITCH_CHANGE = 'SWITCH_CHANGE';

const initialState = {
  balance: 265279.07,
  switchName: 'charge',
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
    default:
      return state;
  }
};

export const switchChanger = text => ({
  type: SWITCH_CHANGE,
  payload: text,
});

export default rootReducer;
