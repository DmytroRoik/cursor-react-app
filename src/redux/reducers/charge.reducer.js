import { SET_TOTAL, SET_DESCRIPTION, LOAD_CHARGE_DATA_SUCCESS,
  LOAD_INCOME_DATA_SUCCESS } from '../actions/charge.actions';

const initialState = {
  totalValue: '',
  descriptionValue: '',
};

const chargeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL: {
      return { ...state, totalValue: action.value };
    }
    case SET_DESCRIPTION: {
      return { ...state, descriptionValue: action.value };
    }
    case LOAD_CHARGE_DATA_SUCCESS: {
      return {
        ...state,
        totalValue: action.totalValue,
        descriptionValue: action.descriptionValue,
      };
    }
    case LOAD_INCOME_DATA_SUCCESS: {
      return {
        ...state,
        totalValue: action.totalValue,
        descriptionValue: action.descriptionValue,
      };
    }
    default:
      return state;
  }
};

export default chargeReducer;
