import api from '../../api/api';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_FAIL = 'GET_USER_DATA_FAIL';

export const getUserDataThunk = (dispatch) => {
  api.getUserData().then((response) => {
    dispatch({
      type: GET_USER_DATA,
      payload: response.data,
    });
  }).catch((error) => {
    dispatch({
      type: GET_USER_DATA_FAIL,
      payload: error,
    });
  });
};
