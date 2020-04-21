import { LOAD_CATEGORIES_CHARGES_SUCCESS, REMOVE_CATEGORY_CHARGES_SUCCESS, LOAD_CATEGORIES_INCOMES_SUCCESS, REMOVE_CATEGORY_INCOMES_SUCCESS } from '../actions/home.actions';
import { ADD_CHARGE_DATA_SUCCESS, ADD_INCOME_DATA_SUCCESS } from '../actions/charge.actions';

const initialState = {
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
        incomes: [...action.payload],
      };
    }
    case REMOVE_CATEGORY_INCOMES_SUCCESS: {
      return {
        ...state,
        incomes: state.incomes.filter(charge => charge.id !== action.payload),
      };
    }
    case ADD_CHARGE_DATA_SUCCESS: {
      console.log(action.payload.data);
      return {
        ...state, charges: [...state.charges, action.payload.data.data],
      };
    }
    case ADD_INCOME_DATA_SUCCESS: {
      return {
        ...state, incomes: [...state.incomes, action.payload.data.data],
      };
    }
    default:
      return state;
  }
};


export default homeReducer;
