import { LOAD_ICONS_SUCCESS } from '../actions/root.actions';
import { GET_TOTAL_BALANCE } from '../actions/profile.actions';

const SWITCH_CHANGE = 'SWITCH_CHANGE';

const initialState = {
  balance: 265279.07,
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
    case LOAD_ICONS_SUCCESS: {
      return {
        ...state,
        icons: action.payload,
      };
    }
    case GET_TOTAL_BALANCE: {
      return {
        ...state,
        balance: action.payload,
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

