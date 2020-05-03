import api from '../../api/api';

export const LOAD_ICONS_SUCCESS = 'LOAD_ICONS_SUCCESS';
export const LOAD_ICONS_FAIL = 'LOAD_ICONS_FAIL';
export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_FAIL = 'GET_USER_DATA_FAIL';
export const GET_TOTAL_BALANCE = 'GET_TOTAL_BALANCE';
export const GET_TOTAL_BALANCE_FAILED = 'GET_TOTAL_BALANCE_FAILED';

export const loadIcons = () => (dispatch) => {
  api.getIcons().then((res) => {
    dispatch({
      type: LOAD_ICONS_SUCCESS,
      payload: res.data.data,

    });
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: LOAD_ICONS_FAIL,
      payload: err,
    });
  });
};

export const getTotalBalanceThunk = () => (dispatch) => {
  api.getUserData().then((response) => {
    dispatch({
      type: GET_TOTAL_BALANCE,
      payload: response.data.totalBalance,
    });
  }).catch((error) => {
    dispatch({
      type: GET_TOTAL_BALANCE_FAILED,
      payload: error,
    });
  });
};

export const getUserDataThunk = () => (dispatch) => {
  api.getUserData().then((response) => {
    dispatch({
      type: GET_USER_DATA,
      payload: response.data.data,
    });
  }).catch((error) => {
    dispatch({
      type: GET_USER_DATA_FAIL,
      payload: error,
    });
  });
};
