import { LOAD_CATEGORIES_SUCCESS, REMOVE_CATEGORY_SUCCESS } from '../actions/categories.actions';

// const SWITCH_ENABLE = 'SWITCH_ENABLE';
// const Delete = "Delete";

const initialState = {
  categories: [

  ],
};

const categoriesReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS: {
      // console.log(action);
      return {
        ...state,
        categories: action.payload,

      };
    }
    case REMOVE_CATEGORY_SUCCESS: {
      console.log(action.payload);// this is  id element were delete
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
