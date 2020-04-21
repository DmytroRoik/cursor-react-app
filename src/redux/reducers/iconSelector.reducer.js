import { LOAD_ICONS_SUCCESS } from '../actions/iconSelector.actions';

const initialState = {
  icons: [],
};

const iconSelectorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ICONS_SUCCESS: {
      return {
        ...state,
        icons: action.payload,
      };
    }
    default:
      return state;
  }
};

export default iconSelectorReducer;