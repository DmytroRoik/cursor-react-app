import { LOAD_CATEGORIES_SUCCESS,
  REMOVE_CATEGORY_SUCCESS,
  ADD_NEW_CATEGORY_SUCCESS,
  SET_ICON_ID } from '../actions/categories.actions';
import {
  LOAD_CATEGORIES_SUCCESS,
  REMOVE_CATEGORY_SUCCESS,
  EDIT_CATEGORY_SUCCESS,
} from '../actions/categories.actions';

const initialState = {
  categories: [],
  name: '',
  description: '',
  iconId: 0,
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

    case SET_ICON_ID: {
      return {
        ...state,
        iconId: action.value,
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
