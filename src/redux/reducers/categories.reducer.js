import { LOAD_CATEGORIES_SUCCESS, REMOVE_CATEGORY_SUCCESS } from '../actions/categories.actions';

const initialState = {
  categories: [

  ],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload,

      };
    }
    case REMOVE_CATEGORY_SUCCESS: {
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default categoriesReducer;
