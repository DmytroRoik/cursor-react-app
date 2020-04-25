import { LOAD_CATEGORIES_SUCCESS, REMOVE_CATEGORY_SUCCESS, ADD_NEW_CATEGORY_SUCCESS,
   SET_NAME_CATEGORY, SET_DESCRIPTION_CATEGORY, SET_ICON_ID } from '../actions/categories.actions';

const initialState = {
  categories: [],
  name: '',
  description: '',
  iconId: ''
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
    case ADD_NEW_CATEGORY_SUCCESS: {
      return {
       ...state,
      categories: action.payload,
      };
    }
    case SET_NAME_CATEGORY: {
      return {
        ...state,
      name: action.value
      };
    }
    case SET_DESCRIPTION_CATEGORY: {
      return {
        ...state,
        description: action.value
      };
    }
    case SET_ICON_ID: {
      return {
        ...state,
        iconId: action.value
      }
    }
    default:
      return state;
  }
};

export default categoriesReducer;
