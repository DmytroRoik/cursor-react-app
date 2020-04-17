import { LOAD_CATEGORIES_CHARGES_SUCCESS, REMOVE_CATEGORY_CHARGES_SUCCESS, LOAD_CATEGORIES_INCOMES_SUCCESS, REMOVE_CATEGORY_INCOMES_SUCCESS } from '../actions/home.actions';

const initialState = {
  categories: [

  ],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_CHARGES_SUCCESS: {
      return {
        ...state,
        categories: action.payload,

      };
    }
    case REMOVE_CATEGORY_CHARGES_SUCCESS: {
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload),
      };
    }
    case LOAD_CATEGORIES_INCOMES_SUCCESS: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case REMOVE_CATEGORY_INCOMES_SUCCESS: {
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload),
      };
    }
    default:
      return state;
  }
};


export default homeReducer;
