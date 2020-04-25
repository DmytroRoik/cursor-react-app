import api from '../../api/api';

export const LOAD_CATEGORIES_CHARGES_SUCCESS = ' LOAD_CATEGORIES_CHARGES_SUCCESS';
export const LOAD_CATEGORIES_CHARGES_FAIL = ' LOAD_CATEGORIES_CHARGES_FAIL';
export const REMOVE_CATEGORY_CHARGES_SUCCESS = 'REMOVE_CATEGORY_CHARGES_SUCCESS';
export const REMOVE_CATEGORY_CHARGES_FAIL = ' REMOVE_CATEGORY_CHARGES_FAIL';

export const LOAD_CATEGORIES_INCOMES_SUCCESS = ' LOAD_CATEGORIES_INCOMES_SUCCESS';
export const LOAD_CATEGORIES_INCOMES_FAIL = ' LOAD_CATEGORIES_INCOMES_FAIL';
export const REMOVE_CATEGORY_INCOMES_SUCCESS = 'REMOVE_CATEGORY_INCOMES_SUCCESS';
export const REMOVE_CATEGORY_INCOMES_FAIL = ' REMOVE_CATEGORY_INCOMES_FAIL';


export const ADD_CHARGE_DATA_SUCCESS = 'LOAD_CHARGE_DATA_SUCCESS';
export const ADD_CHARGE_DATA_FAIL = 'LOAD_CHARGE_DATA_FAIL';
export const ADD_INCOME_DATA_SUCCESS = 'LOAD_INCOME_DATA_SUCCESS';
export const ADD_INCOME_DATA_FAIL = 'LOAD_INCOME_DATA_FAIL';


export const loadCategoriesCharges = () => (dispatch) => {
  api.getCharges().then((res) => {
    dispatch({
      type: LOAD_CATEGORIES_CHARGES_SUCCESS,
      payload: res.data.data,
    });
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: LOAD_CATEGORIES_CHARGES_FAIL,
      payload: err,
    });
  });
};


export const removeCategoryCharges = id => (dispatch) => {
  api.removeCharges(id).then((res) => {
    console.log('res', res);
    dispatch({
      type: REMOVE_CATEGORY_CHARGES_SUCCESS,
      payload: id,

    });
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: REMOVE_CATEGORY_CHARGES_FAIL,
      payload: err,
    });
  });
};


export const loadCategoriesIncomes = () => (dispatch) => {
  api.getCharges().then((res) => {
    dispatch({
      type: LOAD_CATEGORIES_INCOMES_SUCCESS,
      payload: res.data.data,

    });
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: LOAD_CATEGORIES_INCOMES_FAIL,
      payload: err,
    });
  });
};


export const removeCategoryIncomes = id => (dispatch) => {
  api.removeCharges(id).then((res) => {
    console.log('res', res);
    dispatch({
      type: REMOVE_CATEGORY_INCOMES_SUCCESS,
      payload: id,

    });
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: LOAD_CATEGORIES_INCOMES_FAIL,
      payload: err,
    });
  });
};


export const postTotalDescriptionThunk = (
  totalValue,
  descriptionValue, dateValue, history, category, type,
) => (dispatch) => {
  api.postNewCharge(totalValue, descriptionValue, dateValue, category, type)
    .then((data) => {
      dispatch({
        type: ADD_CHARGE_DATA_SUCCESS,
        payload: data,
      });
      history.push('/');
    }).catch((err) => {
      dispatch({
        type: ADD_CHARGE_DATA_FAIL,
        payload: err,
      });
    });
};
