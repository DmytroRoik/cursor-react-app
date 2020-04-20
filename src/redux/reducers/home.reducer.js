import { LOAD_CATEGORIES_CHARGES_SUCCESS, REMOVE_CATEGORY_CHARGES_SUCCESS, LOAD_CATEGORIES_INCOMES_SUCCESS, REMOVE_CATEGORY_INCOMES_SUCCESS } from '../actions/home.actions';

const initialState = {
  categories: [],
  charges: [],
  incomes: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_CHARGES_SUCCESS: {
      return {
        ...state,
        charges: [...action.payload],

      };
    }
    case REMOVE_CATEGORY_CHARGES_SUCCESS: {
      return {
        ...state,
        charges: state.charges.filter(charge => charge.id !== action.payload),
      };
    }
    case LOAD_CATEGORIES_INCOMES_SUCCESS: {
      return {
        ...state,
        charges: action.payload,
      };
    }
    case REMOVE_CATEGORY_INCOMES_SUCCESS: {
      return {
        ...state,
        charges: state.charges.filter(charge => charge.id !== action.payload),
      };
    }
    default:
      return state;
  }
};


export default homeReducer;
