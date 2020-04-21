import api from '../../api/api';

export const SET_TOTAL = 'SET_TOTAL';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const LOAD_CHARGE_DATA_SUCCESS = 'LOAD_CHARGE_DATA_SUCCESS';
export const LOAD_CHARGE_DATA_FAIL = 'LOAD_CHARGE_DATA_FAIL';
export const LOAD_INCOME_DATA_SUCCESS = 'LOAD_INCOME_DATA_SUCCESS';
export const LOAD_INCOME_DATA_FAIL = 'LOAD_INCOME_DATA_FAIL';

export const setTotal = value => ({
  type: SET_TOTAL,
  value,
});

export const setDescription = value => ({
  type: SET_DESCRIPTION,
  value,
});

export const postTotalDescriptionChargeThunk = (totalValue, descriptionValue) => (dispatch) => {
  api.postNewCharge(totalValue, descriptionValue).then((data) => {
    console.log(data);
    dispatch({
      type: LOAD_CHARGE_DATA_SUCCESS,
      totalValue: data.money,
      descriptionValue: data.description,
    });
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: LOAD_CHARGE_DATA_FAIL,
      payload: err,
    });
  });
};

export const postTotalDescriptionIncomeThunk = (totalValue, descriptionValue) => (dispatch) => {
  api.postNewCharge(totalValue, descriptionValue).then((data) => {
    dispatch({
      type: LOAD_INCOME_DATA_SUCCESS,
      totalValue: data.money,
      descriptionValue: data.description,
    });
  }).catch((err) => {
    console.log('error');
    dispatch({
      type: LOAD_INCOME_DATA_FAIL,
      payload: err,
    });
  });
};
