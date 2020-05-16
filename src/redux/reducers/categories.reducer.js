import { LOAD_CATEGORIES_SUCCESS,
  REMOVE_CATEGORY_SUCCESS,
  ADD_NEW_CATEGORY_SUCCESS, EDIT_CATEGORY_SUCCESS } from '../actions/categories.actions';

const initialState = {
  categories: [],
  name: '',
  description: ''
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
        categories: state.categories
          .filter(category => category.id !== action.payload),
      };
    }
    case ADD_NEW_CATEGORY_SUCCESS: {
      return {
        ...state,
        categories: [...state.categories, action.payload.data.data],
      };
    }

    case EDIT_CATEGORY_SUCCESS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default categoriesReducer;
