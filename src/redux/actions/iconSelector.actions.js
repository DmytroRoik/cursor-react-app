import api from '../../api/api';

export const LOAD_ICONS_SUCCESS = ' LOAD_ICONS_SUCCESS';
export const LOAD_ICONS_FAIL = ' LOAD_ICONS_FAIL';

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
