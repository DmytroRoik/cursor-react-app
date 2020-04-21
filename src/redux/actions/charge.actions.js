import api from '../../api/api';

export const SET_TOTAL = 'SET_TOTAL';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SET_DATE = 'SET_DATE';
export const ADD_CHARGE_DATA_SUCCESS = 'LOAD_CHARGE_DATA_SUCCESS';
export const ADD_CHARGE_DATA_FAIL = 'LOAD_CHARGE_DATA_FAIL';
export const ADD_INCOME_DATA_SUCCESS = 'LOAD_INCOME_DATA_SUCCESS';
export const ADD_INCOME_DATA_FAIL = 'LOAD_INCOME_DATA_FAIL';

export const setTotal = value => ({
  type: SET_TOTAL,
  value,
});

export const setDescription = value => ({
  type: SET_DESCRIPTION,
  value,
});

export const setDate = value => ({
  type: SET_DATE,
  value,
});

export const postTotalDescriptionChargeThunk = (
  totalValue,
  descriptionValue, dateValue, history,
) => (dispatch) => {
  api.postNewCharge(totalValue, descriptionValue, dateValue).then((data) => {
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

export const postTotalDescriptionIncomeThunk = (
  totalValue,
  descriptionValue, dateValue, history,
) => (dispatch) => {
  api.postNewCharge(totalValue, descriptionValue, dateValue).then((data) => {
    dispatch({
      type: ADD_INCOME_DATA_SUCCESS,
      payload: data,
    });
    history.push('/');
  }).catch((err) => {
    dispatch({
      type: ADD_INCOME_DATA_FAIL,
      payload: err,
    });
  });
};
