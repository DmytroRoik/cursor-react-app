import api from '../../api/api';

export const LOAD_AVATAR_SUCCESS = 'LOAD_AVATAR_SUCCESS';
export const LOAD_AVATAR_FAIL = 'LOAD_AVATAR_FAIL';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_FAIL = 'GET_USER_DATA_FAIL';


export const loadAvatar = () => (dispatch) => {
  api.getAvatars().then((res) => {
    dispatch({
      type: LOAD_AVATAR_SUCCESS,
      payload: res.data.data,

    });
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: LOAD_AVATAR_FAIL,
      payload: err,
    });
  });
};
export const getUserDataProfile = (dispatch) => {
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
