import Api from '../../api/api';
import {
  GET_STATS_REQUEST,
  GET_STATS_FAIL,
  GET_STATS_SUCCESS,
} from './../actionTypes';

const getStats = date => async (dispatch) => {
  dispatch({
    type: GET_STATS_REQUEST,
  });

  try {
    const stats = await Api.getStats(date).then(res => res.data);
    dispatch({
      type: GET_STATS_SUCCESS,
      payload: stats,
    });
  } catch (err) {
    dispatch({
      type: GET_STATS_FAIL,
      payload: err,
      error: true,
    });
  }
};

export default getStats;
