import api from '../../api/api';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_FAIL = 'GET_USER_DATA_FAIL';
export const ADD_USER_DATA_SUCCESS = 'ADD_USER_DATA_SUCCESS';
export const ADD_USER_DATA_FAIL = 'ADD_USER_DATA_FAIL';

export const POST_AVATAR_REQUEST = 'POST_AVATAR_REQUEST';
export const POST_AVATAR_SUCCESS = 'POST_AVATAR_SUCCESS';
export const POST_AVATAR_FAIL = 'POST_AVATAR_FAIL';

export const SWITCH_TOASTER = 'SWITCH_TOASTER';

export const setToaster = isToaster => ({
  type: SWITCH_TOASTER,
  payload: isToaster,
});

export const getUserDataProfile = () => (dispatch) => {
  api.getUserData().then((response) => {
    response.data.data.avatar =
    (process.env.REACT_APP_BASE_URL).slice(0, -1) + response.data.data.avatar;

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
  api.putProfile(name, email, notify, criticalBudget).then(({ data }) => {
    data.data.avatar =
    (process.env.REACT_APP_BASE_URL).slice(0, -1) + data.data.avatar;

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

export const editAvatar = data => async (dispatch) => {
  dispatch({
    type: POST_AVATAR_REQUEST,
  });

  try {
    const avatar = await api.editAvatar(data).then(res => res.data);
    avatar.data.avatar =
    (process.env.REACT_APP_BASE_URL).slice(0, -1) + avatar.data.avatar;

    dispatch({
      type: POST_AVATAR_SUCCESS,
      payload: avatar,
    });
  } catch (err) {
    dispatch({
      type: POST_AVATAR_FAIL,
      payload: err,
      error: true,
    });
  }
};

