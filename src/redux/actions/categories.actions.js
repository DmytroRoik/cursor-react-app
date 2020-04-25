import api from '../../api/api';

export const LOAD_CATEGORIES_SUCCESS = ' LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_FAIL = ' LOAD_CATEGORIES_FAIL';
export const REMOVE_CATEGORY_SUCCESS = 'REMOVE_CATEGORY_SUCCESS';
export const REMOVE_CATEGORY_FAIL = ' REMOVE_CATEGORY_FAIL';
export const EDIT_CATEGORY_SUCCESS = 'EDIT_CATEGORY_SUCCESS';
export const EDIT_CATEGORY_FAIL = ' EDIT_CATEGORY_FAIL';

export const loadCategories = () => (dispatch) => {
  api.getCategories().then((res) => {
    dispatch({
      type: LOAD_CATEGORIES_SUCCESS,
      payload: res.data.data,
    });
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: LOAD_CATEGORIES_FAIL,
      payload: err,
    });
  });
};

export const removeCategory = id => (dispatch) => {
  api.removeCategory(id).then(() => {
    dispatch({
      type: REMOVE_CATEGORY_SUCCESS,
      payload: id,

    });
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: REMOVE_CATEGORY_FAIL,
      payload: err,
    });
  });
};

export const editCategory = (id, data) => (dispatch) => {
  api.editCategory(id, data).then(() => {
    dispatch(loadCategories());
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: EDIT_CATEGORY_FAIL,
      payload: err,
    });
  });
};
