import api from '../../api/api';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_FAIL = 'GET_USER_DATA_FAIL';
export const ADD_USER_DATA_SUCCESS = 'ADD_USER_DATA_SUCCESS';
export const ADD_USER_DATA_FAIL = 'ADD_USER_DATA_FAIL';


export const getUserDataProfile = () => (dispatch) => {
  api.getUserData().then((response) => {
    dispatch({
      type: GET_USER_DATA,
      payload: response.data.data,
      balance: response.data.totalBalance,
    });
  }).catch((error) => {
    dispatch({
      type: GET_USER_DATA_FAIL,
      payload: error,
    });
  });
};

export const postUserData = (
  name,
  email,
  notify,
  criticalBudget,
) => (dispatch) => {
  api.putProfile(name, email, notify, criticalBudget).then((data) => {
    dispatch({
      type: ADD_USER_DATA_SUCCESS,
      payload: data,
    });
  }).catch((err) => {
    dispatch({
      type: ADD_USER_DATA_FAIL,
      payload: err,
    });
  });
};
