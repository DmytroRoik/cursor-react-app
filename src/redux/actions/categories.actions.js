import api from '../../api/api';

export const LOAD_CATEGORIES_SUCCESS = ' LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_FAIL = ' LOAD_CATEGORIES_FAIL';
export const REMOVE_CATEGORY_SUCCESS = 'REMOVE_CATEGORY_SUCCESS';
export const REMOVE_CATEGORY_FAIL = ' REMOVE_CATEGORY_FAIL';
export const ADD_NEW_CATEGORY_SUCCESS = 'ADD_NEW_CATEGORY_SUCCESS';
export const ADD_NEW_CATEGORY_FAIL='ADD_NEW_CATEGORY_FAIL';
export const SET_ICON_ID = 'SET_ICON_ID';

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
  api.removeCategory(id).then((res) => {
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
 
export const postCategory = (name, description, indexId, history )=>(dispatch) =>{
  api.postCategory(name,description,indexId).then((data) => {
    dispatch({
      type: ADD_NEW_CATEGORY_SUCCESS,
      payload: data,
     
    });
    history.push('/categories')
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: ADD_NEW_CATEGORY_FAIL,
      payload: err,
    });
  });
};

export const setIconId = (value) => {
   return {
     type: SET_ICON_ID,
     value,
   }
 };

