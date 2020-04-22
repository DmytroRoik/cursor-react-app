import api from '../../api/api';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_FAIL = 'GET_USER_DATA_FAIL';
export const GET_TOTAL_BALANCE = 'GET_TOTAL_BALANCE';
export const GET_TOTAL_BALANCE_FAILED = 'GET_TOTAL_BALANCE_FAILED';

export const getUserDataThunk = (dispatch) => {
  api.getUserData().then((response) => {
    dispatch({
      type: GET_USER_DATA,
      data: response.data,
    });
  }).catch((error) => {
    dispatch({
      type: GET_USER_DATA_FAIL,
      data: error,
    });
  });
};

export const getTotalBalanceThunk = (dispatch) => {
  api.getUserData().then((response) => {
    dispatch({
      type: GET_TOTAL_BALANCE,
      totalBalance: response.totalBalance,
    });
  }).catch((error) => {
    dispatch({
      type: GET_TOTAL_BALANCE_FAILED,
      totalBalance: error,
    });
  });
};
