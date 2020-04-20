import api from '../../api/api.js';

const GET_ICONS = "GET_ICONS";

const initialState = {
    icons: [],
   };

export const iconSelectorReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ICONS: {
        return { ...state};
      }
    default:
        return state;
    }
  };

const getIconsData = (icons) => {
    return {
      type: GET_ICONS,
      icons,
    };
  };

export const getIconsListThunk = () => {
    return (dispatch) => {
      return api.getIcons().then((response) => {
        dispatch(getIconsData(response.data));
      });
    };
  };

 
  export default iconSelectorReducer;