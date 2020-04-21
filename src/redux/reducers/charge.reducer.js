import { SET_TOTAL, SET_DESCRIPTION,
  SET_DATE } from '../actions/charge.actions';

const initialState = {
  totalValue: '',
  descriptionValue: '',
  dateValue: '',
};

const chargeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL: {
      return { ...state, totalValue: action.value };
    }
    case SET_DESCRIPTION: {
      return { ...state, descriptionValue: action.value };
    }
    case SET_DATE: {
      return { ...state, dateValue: action.value };
    }
    default:
      return state;
  }
};

export default chargeReducer;
